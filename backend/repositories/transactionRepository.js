import mongoose from "mongoose";
import Transaction from "../schemas/transactionSchema.js";

class transactionRepository {
  async create(transaction) {
    return await Transaction.create(transaction);
  }

  async getAllTransactions(filter) {
    
    return await Transaction.find(filter);
  }

  async getAll() {
    
    return await Transaction.find();
  }
  
  async getOne(id) {
    return await Transaction.findById(id);
  }

  async delete(id) {
    return await Transaction.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }

  async update(id, transaction) {
    return await Transaction.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      transaction,
      { new: true }
    );
  }
}

export default new transactionRepository();
