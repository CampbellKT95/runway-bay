import {sendMail, scheduleEmail} from "../mailer.js";

export const sendMemo = async (req, res) => {
    try {
        const receivedMemo = req.body

        console.log("controllers", receivedMemo.memo)

        sendMail(receivedMemo.memo);
        
        res.status(201).json({message: "sendMail successful"});

    } catch (error) {
        console.log(error)
    }

}

export const scheduleEmail = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}