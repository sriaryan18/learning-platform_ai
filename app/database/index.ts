import {VectorDatabaseFactory} from "../factory/VectorDatabaseFactory";


const dbApiKey = process.env.PINECODE_API_KEY || undefined;

const dbFactory = new VectorDatabaseFactory(dbApiKey);
export default  dbFactory.getDBInstance()
