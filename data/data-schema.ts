import { z } from 'zod';

export const text = z.object({
  value: z.string(),
});

export const info = z.object({
  value: z.string().optional(),
  link: z.string().optional(),
  badge: z.string().optional(),
});

export const stat = z.object({
  value: z.number().optional(),
  link: z.string().optional(),
  badge: z.string().optional(),
});

export const framework = z.object({
  name: info,
  githubStars: stat,
  npmWeeklyDownloads: stat,
  loved: stat.optional(),
  usage: stat.optional(),
  retention: stat.optional(),
  usedBy: info.optional(),
  render: info.optional(),
  releaseDate: info.optional(),
  metaFrameworks: info.array().optional(),
});

export type Framework = z.infer<typeof framework>;

export type Text = z.infer<typeof text>;

export type Info = z.infer<typeof info>;

export type Stat = z.infer<typeof stat>;
