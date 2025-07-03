import express from 'express'
import transactionController from '../controllers/transactionController.js';

const router = express.Router();

router.get("/", transactionController.readAllTransaction)

router.post("/", transactionController.createTransaction)


router.route("/:id")
    .put(transactionController.updateTransaction)

    .delete(transactionController.deleteTransaction)

    .get(transactionController.readTransaction);

export default router;