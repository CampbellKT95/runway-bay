import {sendMail} from "../mailer.js";

export const sendMemo = async (req, res) => {
    try {
        const receivedMemo = req.body

        sendMail(receivedMemo.memo);
        
        res.status(201).json({message: "sendMail successful"});

    } catch (error) {
        console.log(error)
    }

}

// export const setEmail = async (req, res) => {
//     try {

//     } catch (error) {
//         console.log(error)
//     }
// }