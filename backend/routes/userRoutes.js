import express from 'express'
import userController from '../controllers/userController.js';
import { verifyToken } from '../helpers/authentication.js';

const router = express.Router();

router.post("/register", userController.register)
router.post("/login",userController.login)
router.get("/sections", verifyToken, userController.obtainSections)
router.put("/addSection", verifyToken, userController.addSection)
router.put("/deleteSection", verifyToken, userController.deleteSection)

export default router;