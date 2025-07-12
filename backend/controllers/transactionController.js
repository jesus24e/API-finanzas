import transactionRepository from "../repositories/transactionRepository.js";

class TransactionController {
  constructor() {}

  async createTransaction(req, res) {
    try {
      const { tipo, monto, descripcion } = req.body;
      const { email } = req.user;

      const data = await transactionRepository.create({
        tipo,
        monto,
        descripcion,
        email
      });
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }

  async readAllTransaction(req, res) {
    try {
      const data = await transactionRepository.getAllByEmail(req.user.email);
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
      } else {
        res.status(200).send("elemento eliminado");
      }
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  }
}

export default new TransactionController();
