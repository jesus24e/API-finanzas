import express from "express"
import transactionRoutes from "./routes/transactionRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import dbClient from "./databases/conexion.js"
import cors from "cors"

const app = express();
const PORT = process.env.Port;

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
