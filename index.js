import express from "express";
import { PORT } from "./config.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import dbClient from "./databases/conexion.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.use("/transactions", transactionRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

process.on("SIGINT", async () => {
  dbClient.disconectDB();
  process.exit(0);
});
