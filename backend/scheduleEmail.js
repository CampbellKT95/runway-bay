import nodemailer from "nodemailer";
import cron from "node-cron";
import {google} from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFERSH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI)

oAuth2Client.setCredentials({refresh_token: REFERSH_TOKEN});

export async function sendMail(emailContent) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "campbellkt2013@gmail.com",
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET,
                refreshToken: REFERSH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: "campbellkt2013@gmail.com",
            to: "dp8747@aol.com",
            subject: "Scheduled Lease Reminder",
            text: emailContent,
            html: `<h1>${emailContent}</h1>`
        };

        const result = await transport.sendMail(mailOptions);
        return result

    } catch (error) {
        return error;
    }
}

// https://www.npmjs.com/package/node-cron
// each star, from left=>right: second, minute, hour, day of month, month, day of week
export const scheduleEmail = () => {

    const reminder = "Tenant: -- lease expires in 45 days"

    cron.schedule("* * * * * *", () => {
        sendMail(reminder)
            .then(result => console.log("reminder set", result))
            .catch(error => console.log(error.message))  
    })
}

