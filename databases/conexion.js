import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const dataBase = "pruebas";

class dbClient{
  
  constructor(){
    const mongoUri = process.env.MONGO_URI
    this.client = new MongoClient(mongoUri); 
    this.conectarDB();
  }

  async conectarDB() {
    try {
      await this.client.connect();
      this.db = this.client.db(dataBase);
      console.log("✅ Conectado correctamente a la Base de Datos");
    } 
    
    catch (error) {
      console.error("❌ Error al conectar:", error.message);
    } 
  }
}

export default new dbClient;