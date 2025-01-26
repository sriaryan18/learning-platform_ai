import { OpenAIClient } from "../aiProviders/OpenAI";

export enum AiServiceProviderNames {
  OPENAI = "OPENAI",
}

export type AI_CLIENT = OpenAIClient;

export enum FEATURES_ROUTES {
  EXAM = "/exam",
}

export enum QUESTION_LEVEL {
  E = "EASY",
  M = "MEDIUM",
  H = "HARD",
}

export const STATUS_OK = 200;
export const STATUS_INTERNAL_SERVER_ERROR = 500;
