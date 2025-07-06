import express from "express"
import { PORT } from "./config.js"
import transactionRoutes from "./routes/transactionRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import dbClient from "./databases/conexion.js"
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.use("/transactions", transactionRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});

process.on("SIGINT", async () => {
  dbClient.disconectDB();
  process.exit(0);
});
