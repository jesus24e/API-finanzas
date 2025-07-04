import { json } from "express";
import transactionRepository from "../repositories/transactionRepository.js";
import { Collection } from "mongodb";

class TransactionController {
  constructor() {}

  async createTransaction(req, res) {
    try {
      const defaults = {
        tipo: "gasto",
        monto: 0,
        descripcion: "sin descripción",
      };

      const transaccion = { ...defaults, ...req.body };
      const data = await transactionRepository.create(transaccion);

      if (!data) {
        res.status(404).send("error: " + error.message);
      }

      res.status(201).json(data);
      console.log("mesaje recibido en indice " + JSON.stringify(data));
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  async readAllTransaction(req, res) {
    try {
      const data = await transactionRepository.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  async readTransaction(req, res) {
    try {
      const { id } = req.params;
      const data = await transactionRepository.getOne(id);

      if (!data) {
        return res.status(404).send("transaccion no encontrada.");
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  async updateTransaction(req, res) {
    try {
      const { id } = req.params;
      const data = await transactionRepository.update(id, req.body);

      if (!data) {
        return res.status(404).send("transaccion no encontrada.");
      }

      if (!req.body || Object.keys(req.body).length == 0) {
        return res.status(204).send("body sin contenido");
      }

      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  async deleteTransaction(req, res) {
    try {
      const { id } = req.params;
      const data = await transactionRepository.delete(id);
      if (!data) {
        return res.status(404).send("transaccion no encontrada.");
      }
      // res.status(200).send(`id ${id} eliminado`);
      res.status(200);
    } catch (error) {
      res.status(500).send(`error: ${error.message}`);
      console.log(error);
    }
  }
}

export default new TransactionController();
