import express from 'express'
import transactionController from '../controllers/transactionController.js';

const router = express.Router();

router.get("/", transactionController.readAll)

router.post("/", transactionController.create)


router.route("/:id")
    .put(transactionController.update)

    .delete(transactionController.delete)

    .get(transactionController.read);

export default router;