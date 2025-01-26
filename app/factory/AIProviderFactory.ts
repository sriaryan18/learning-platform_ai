import { AI_CLIENT, AiServiceProviderNames } from "../types/constants";
import { OpenAIClient } from "../aiProviders/OpenAI";
import OpenAI from "openai";

export class AIProviderFactory {
  constructor(private apiKey: string | undefined) {
    if (!apiKey) {
      throw new Error("API key is required to initialize AIProviderFactory");
    }
  }

  public getAiClient(
    serviceProvider: string | undefined
  ): AI_CLIENT | undefined {
    if (!serviceProvider) {
      throw new Error(
        "Service provider is required to initialize AIProviderFactory"
      );
    }

    switch (serviceProvider) {
      case AiServiceProviderNames.OPENAI:
        return new OpenAIClient(this.apiKey!);
      default:
        console.error(serviceProvider + " is not supported");
    }
  }
}
