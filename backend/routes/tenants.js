import express from "express";
import { getTenants, createTenant, updateTenant } from "../controllers/tenants.js"

const router = express.Router();

router.get("/", getTenants);
router.post("/", createTenant)
router.patch("/:id", updateTenant)

export default router;