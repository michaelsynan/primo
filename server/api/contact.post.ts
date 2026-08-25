export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig(event);

  const {
    name,
    email,
    phone,
    service,
    message,
    consentService,
    consentMarketing,
    source,
    submittedAt,
  } = body;

  const resendApiKey = config.resendApiKey as string | undefined;
  const contactTo = (config.contactTo as string | undefined) || "primosewercleaning@gmail.com,mikesynan@gmail.com";
  const contactBcc = config.contactBcc as string | undefined;
  const contactFrom =
    (config.contactFrom as string | undefined) ||
    "Primo Sewer Cleaning <hello@primosewercleaning.com>";

  if (!resendApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "Missing RESEND_API_KEY server configuration",
    });
  }

  // Validate required fields
  if (!name || !email || !phone || !service || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "All fields are required",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  // Validate phone format (must be 10 digits)
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length !== 10) {
    throw createError({
      statusCode: 400,
      statusMessage: "Phone number must be 10 digits",
    });
  }

  if (consentService !== true) {
    throw createError({
      statusCode: 400,
      statusMessage: "Service communications consent is required",
    });
  }

  try {
    const toList = contactTo
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
    const bccList = (contactBcc || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background-color: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #1f2937; margin-bottom: 5px; display: block; }
              .value { background-color: white; padding: 12px; border-radius: 4px; border: 1px solid #e5e7eb; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0;">Primo Sewer Cleaning</p>
              </div>
              <div class="content">
                <p style="margin-top: 0;">A customer submitted a request from the website contact form.</p>
                
                <div class="field">
                  <span class="label">Name:</span>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <span class="label">Email:</span>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value">${phoneDigits}</div>
                </div>
                
                <div class="field">
                  <span class="label">Service Requested:</span>
                  <div class="value">${service}</div>
                </div>
                
                <div class="field">
                  <span class="label">Message:</span>
                  <div class="value">${message}</div>
                </div>

                <div class="field">
                  <span class="label">Service Communications Consent:</span>
                  <div class="value">${consentService ? "Yes" : "No"}</div>
                </div>

                <div class="field">
                  <span class="label">Marketing / Follow-Up Consent:</span>
                  <div class="value">${consentMarketing ? "Yes" : "No"}</div>
                </div>

                <div class="field">
                  <span class="label">Source:</span>
                  <div class="value">${source || "contact-a-plumber"}</div>
                </div>

                <div class="field">
                  <span class="label">Submitted At:</span>
                  <div class="value">${submittedAt || new Date().toISOString()}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the Primo Sewer Cleaning contact form.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;

    const payload: Record<string, unknown> = {
      from: contactFrom,
      to: toList,
      reply_to: email,
      subject: "New Contact Form Submission - Primo Sewer Cleaning",
      html,
    };

    if (bccList.length) {
      payload.bcc = bccList;
    }

    const data = await $fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: payload,
    });

    return {
      success: true,
      message: "Email sent successfully",
      data,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal server error",
    });
  }
});
