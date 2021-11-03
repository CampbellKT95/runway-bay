import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Tenant from "./models/tenants.js";
import tenantRoutes from "./routes/tenants.js";
import userRoutes from "./routes/users.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/tenants", tenantRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Loading...")
})

//process.env to acces .env file info
const port = process.env.PORT || 5000;

mongoose.connect(process.env.TENANTS_DB_URI)
    .then((result) => app.listen(port, () => console.log(`Connected to db on port ${port}`)))
    .catch((err) => console.log(err))




