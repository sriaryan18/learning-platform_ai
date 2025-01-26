import {AIProviderFactory} from "../factory/AIProviderFactory";

const aiApiKey = process.env.AI_PROVIDER_API_KEY || undefined;
const serviceProvider = process.env.AI_PROVIDER || undefined;

const aiClientFactory = new AIProviderFactory(aiApiKey);

export  default  aiClientFactory.getAiClient(serviceProvider)
