import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {

    console.log(req)
    
    const {username, password} = req.body;

    try {
        const existingUser = await User.findOne({username});

        console.log(existingUser)

        if (!existingUser) {
            return res.status(404).json({message: "User does not exist. Please try again."})
        } 

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials."})
       }

       //second parameter will be a .env secret, will do later
       const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, "test", {expiresIn: "1h"})

       res.status(200).json({result: existingUser, token});

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something went wrong."})
    }
}
