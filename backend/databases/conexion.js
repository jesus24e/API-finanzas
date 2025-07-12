import dotenv from "dotenv";
import mongoose, { mongo } from "mongoose";

dotenv.config();

class dbClient {
  constructor() {
    this.conectDB();
  }

  async conectDB() {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
  }

  async disconectDB() {
    try {
      await mongoose.disconnect();
      console.log("conexion a la base de datos cerrada.");
    } catch (error) {
      console.error("error al desconectar la base de datos: ", error);
    }
  }
}

export default new dbClient();
