import dbClient from "../databases/conexion.js"

const collectionName = "transaccionesTest";

class transactionRepository{
    async create(transaction){
        const collection = dbClient.db.collection(collectionName)
        await collection.insertOne(transaction)
        return {...transaction};
    }
}

export default new transactionRepository;