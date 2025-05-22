import express from "express";
import { register, login, dashboard } from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/dashboard", verifyToken, dashboard);

export default router;
