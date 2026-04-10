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
      date: z.string(),
    }),
  }),
};

export default defineContentConfig({
  collections,
});
