import express from "express";
import { getTenants, createTenant, updateTenant, deleteTenant } from "../controllers/tenants.js";

import {auth} from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getTenants);
router.post("/", auth, createTenant)
router.patch("/:id", auth, updateTenant)
router.delete("/:id", auth, deleteTenant)

// //
// router.post("/", auth, scheduleReminder)
// //

export default router;