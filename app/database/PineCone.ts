import {
  Pinecone,
  RecordMetadata,
  RecordValues,
} from "@pinecone-database/pinecone";

export class PineConeClient {
  private static dbClient: Pinecone;
  private indexName: string | undefined;

  constructor(private apiKey: string) {
    if (!this.apiKey) {
      console.error("No API key provided");
    }
    this.indexName = process.env.PINECONE_INDEX || undefined;
  }
  getInstance(): Pinecone {
    if (PineConeClient.dbClient) {
      return PineConeClient.dbClient;
    } else {
      const db = new Pinecone({
        apiKey: this.apiKey,
      });
      PineConeClient.dbClient = db;
      return db;
    }
  }

  async storeEmbeddigs(embedding: RecordValues, metaData: RecordMetadata) {
    const instance = this.getInstance();
    if (this.indexName) {
      await instance.index(this.indexName).upsert([
        {
          values: embedding,
          id: Math.random().toString(),
          metadata: metaData,
        },
      ]);
    }
  }

  async getEmbeddingsBasedOnId(id: string) {
    const instance = this.getInstance();
  }
}
