import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Tenant from "./models/tenants.js";

dotenv.config();

//process.env to acces .env file info
const port = process.env.PORT || 3000;

mongoose.connect(process.env.TENANTS_DB_URI)
    .then((result) => console.log(`Connected to db on port ${port}`))
    .catch((err) => console.log(err))


// 

tenant.save()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });