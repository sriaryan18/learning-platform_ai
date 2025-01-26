import OpenAI from "openai";
import { AiClientsInterface } from "../types/interfaces";
import { AiServiceProviderNames } from "../types/constants";
import { zodResponseFormat } from "openai/helpers/zod";
import similarity from 'compute-cosine-similarity'
export class OpenAIClient implements AiClientsInterface {
  private static openAiClient: OpenAI | undefined;
  private model = "gpt-3.5-turbo";

  public clientName = AiServiceProviderNames.OPENAI;

  constructor(private secretKey: string) {
    if (!this.secretKey) {
      console.error("No secret key provided for OpenAI");
    }
  }

  getInstance(): OpenAI {
    if (OpenAIClient.openAiClient) {
      return OpenAIClient.openAiClient;
    } else {
      const client = new OpenAI({
        apiKey: this.secretKey,
      });
      OpenAIClient.openAiClient = client;
      return client;
    }
  }

  async generateFromAi(
    prompt: string,
    schema?: any
  ): Promise<any | string | null> {
    const instance = this.getInstance();
    const response = await instance.beta.chat.completions.parse({
      model: "gpt-4o-2024-08-06",
      messages: [
        {
          role: "assistant",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
      ...(schema && { response_format: zodResponseFormat(schema, "schema") }),
    });

    return response.choices[0].message.parsed;
  }

  async getEmbeddingsOfTexts(
    text: string
  ): Promise<OpenAI.Embeddings.CreateEmbeddingResponse> {
    const instance = this.getInstance();
    const embeddings = await instance.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
      encoding_format: "float",
      dimensions: 256,
    });
    return embeddings;
  }

compareTwoEmbeddings(embedding1: number[], embedding2: number[]): number | null{
    const cosineScore = similarity(embedding1, embedding2);
    return cosineScore;
  }

}
