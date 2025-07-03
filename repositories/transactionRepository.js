import { ObjectId } from "mongodb";
import dbClient from "../databases/conexion.js";

const collectionName = "transaccionesTest";

class transactionRepository {
  async create(transaction) {
    const collection = dbClient.db.collection(collectionName);
    transaction.id = (await collection.countDocuments()) + 1;
    await collection.insertOne(transaction);
    return transaction.id;
  }

  async getAll() {
    const collection = dbClient.db.collection(collectionName);
    return await collection.find({}).toArray();
  }

  async getOne(id) {
    const collection = dbClient.db.collection(collectionName);
    return await collection.findOne({ _id: new ObjectId(id) });
  }

  async delete(id) {
    const collection = dbClient.db.collection(collectionName);
    return await collection.deleteOne({ _id: new ObjectId(id) });
  }

  async update(id, transaction) {
    const collection = dbClient.db.collection(collectionName);

    return await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: transaction }
    );
  }
}

export default new transactionRepository();
