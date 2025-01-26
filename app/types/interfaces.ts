import type OpenAI from "openai";
import { z } from "zod";
import {
  AIResponseItemSchema,
  CategorizedResponseSchema,
} from "../utils/ai/zod";
export type AI_CLIENTS = OpenAI;

export interface AiClientsInterface {
  getInstance(apiKey: string): AI_CLIENTS;
  generateFromAi(prompt: string): any; // TODO: make appropriate type
}

export type AI_EXAM_RESPONSE = z.infer<typeof CategorizedResponseSchema>;

export type AIResponseItemSchemaType = z.infer<typeof AIResponseItemSchema>;

export interface StudentProfileInterface {
  tests: Array<{
    topics: string[];
    percentageObtained: number;
  }>;
  weekTopics: string[];
  topicsLearned: string[];
}

export type QuestionsAndEmbeddings = {
  text: Array<AIResponseItemSchemaType>;
  embeddings: Array<number[]>;
};
