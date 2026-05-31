import { defineCollection, z } from 'astro:content';

const catalog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    vintage: z.number(),
    varietal: z.string(),
    region: z.string(),
    volumeAvailable: z.string(),
    alcoholPercent: z.number(),
    pH: z.number(),
    totalAcidity: z.number(),
    residualSugar: z.number().optional(),
    status: z.enum(['Available', 'Reserved']),
    description: z.string(),
    tanninLevel: z.string().optional(),
    colorIntensity: z.string().optional(),
    certifications: z.array(z.string()).optional(),
    minOrderVolume: z.string().optional(),
    packagingOptions: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { catalog };
