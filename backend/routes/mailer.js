import express from "express";
import {sendMemo} from "../controllers/mailer.js";

const router = express.Router();

router.post("/", sendMemo)

export default router;