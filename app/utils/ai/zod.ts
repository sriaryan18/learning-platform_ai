import { z } from "zod";
export const AIResponseItemSchema = z.object({
  question: z.string(),
  options: z.array(z.string()),
  tags: z.array(z.string()),
  level: z.enum(["E", "M", "H"]),
  answer: z.string(),
});

// Zod schema for the categorized response
export const CategorizedResponseSchema = z.object({
  E: z.array(AIResponseItemSchema),
  M: z.array(AIResponseItemSchema),
  H: z.array(AIResponseItemSchema),
});
