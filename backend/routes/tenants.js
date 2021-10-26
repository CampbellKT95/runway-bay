import express from "express";
import { getTenants } from "../controllers/tenants.js"

const router = express.Router();

router.get("/", getTenants);
export default router;