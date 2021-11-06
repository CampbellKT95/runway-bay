import sendMail from "../mailer.js";

export const sendMemo = async (req, res) => {
    try {
        const receivedMemo = req.body

        console.log("controllers", receivedMemo.memo)

                    //where all mailer logic will go
        sendMail(receivedMemo.memo);
        
        res.status(201).json({message: "sendMail successful"});

    } catch (error) {
        console.log(error)
    }

}