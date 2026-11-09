import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default("Kiến thức"),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
    categoryEn: z.string().optional()
  })
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(100),
    category: z.string().default("Bắt đầu"),
    draft: z.boolean().default(false),
    titleEn: z.string().optional(),
    descriptionEn: z.string().optional(),
    categoryEn: z.string().optional()
  })
});

const faq = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/faq" }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().default("Chung"),
    order: z.number().default(100),
    questionEn: z.string().optional(),
    answerEn: z.string().optional(),
    categoryEn: z.string().optional()
  })
});


const blogEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog-en" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default("Knowledge"),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

const guidesEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides-en" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(100),
    category: z.string().default("Getting started"),
    draft: z.boolean().default(false)
  })
});

export const collections = { blog, guides, faq, blogEn, guidesEn };
