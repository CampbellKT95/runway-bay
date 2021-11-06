import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import tenantRoutes from "./routes/tenants.js";
import userRoutes from "./routes/users.js";

//
import mailerRoutes from "./routes/mailer.js";
//

dotenv.config();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/tenants", tenantRoutes);
app.use("/users", userRoutes); 

//
app.use("/mailer", mailerRoutes)
//

app.get("/", (req, res) => {
    res.send("Loading...")
})

const port = process.env.PORT || 5000;

mongoose.connect(process.env.TENANTS_DB_URI)
    .then((result) => app.listen(port, () => console.log(`Connected to db on port ${port}`)))
    .catch((err) => console.log(err))




