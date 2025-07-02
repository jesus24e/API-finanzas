import { json } from "express";
import transactionRepository from "../repositories/transactionRepository.js"

class TransactionController{
    constructor(){

    }

    async create(req,res){
        try {
            const data = await transactionRepository.create(req.body);

            res.status(200).json(data);
            console.log("mesaje recibido: " + JSON.stringify(data))
        } catch (error) {
            res.status(500).send(error);
            console.log(error)
        }
        
    }

    readAll(req,res){
        res.json({msg:"all transactions"})
    }

    read(req,res){
        const{ id }=req.params;

        res.json({msg:`get transaction ${id}`})
    }

    update(req,res){
        const { id } = req.params;

        res.json({msg:`update transaction ${id}`})
    }

    delete(req,res){
        const { id } = req.params;

        res.json({msg:`delete transaction ${id}`})
    }
}

export default new TransactionController();