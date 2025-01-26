import { PineConeClient } from "../database/PineCone";

export class VectorDatabaseFactory {
  constructor(private apiKey: string | undefined) {
    if (!this.apiKey) {
      console.error("No API key found for this database ");
    }
  }
  public getDBInstance() {
    if (!this.apiKey) {
      console.error("No API key found for this database ");
    } else return new PineConeClient(this.apiKey);
  }
}
