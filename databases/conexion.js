import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);

const mongoUri = process.env.MONGO_URI
const client = new MongoClient(mongoUri);
const dataBase = "pruebas";
const collectionName = "transaccionesTest";

async function conectarDB() {
  try {
    await client.connect();
    console.log("✅ Conectado correctamente a MongoDB");
  } 
  
  catch (error) {
    console.error("❌ Error al conectar:", error.message);
  } finally {
    await client.close();
  }
}

conectarDB();

export default client;