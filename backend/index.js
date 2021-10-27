import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Tenant from "./models/tenants.js";
import tenantRoutes from "./routes/tenants.js";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

app.use("/tenants", tenantRoutes);

//process.env to acces .env file info
const port = process.env.PORT || 5000;

mongoose.connect(process.env.TENANTS_DB_URI)
    .then((result) => app.listen(port, () => console.log(`Connected to db on port ${port}`)))
    .catch((err) => console.log(err))


