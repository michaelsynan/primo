import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export const collections = {
  posts: defineCollection({
    // Specify the type of content in this collection
    type: "page",
    // Load every file inside the `content` directory
    source: "posts/*.md",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      sitemap: z
        .union([z.boolean(), z.record(z.any())])
        .optional()
        .default({}),
      ctaTopic: z.string().optional(),
      cta: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
          primaryText: z.string().optional(),
          primaryVariant: z
            .enum(["call", "email", "whatsapp", "link"])
            .optional(),
          primaryTo: z.string().optional(),
          secondaryText: z.string().optional(),
          secondaryTo: z.string().optional(),
        })
        .optional(),
      date: z.string(),
    }),
  }),
};

export default defineContentConfig({
  collections,
});
