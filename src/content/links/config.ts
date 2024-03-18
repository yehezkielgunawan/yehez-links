import { defineCollection, z } from "astro:content";

const linkCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string(),
  }),
});

export const collection = {
  linkCollection: linkCollection,
};
