import express from 'express'
import transactionController from '../controllers/transactionController.js';
import { verifyToken } from '../helpers/authentication.js';

const router = express.Router();

router.get("/", verifyToken, transactionController.readAllTransaction)

router.post("/", verifyToken,transactionController.createTransaction)


router.route("/:id")
    .put(verifyToken,transactionController.updateTransaction)

    .delete(verifyToken,transactionController.deleteTransaction)

    .get(verifyToken,transactionController.readTransaction);

export default router;