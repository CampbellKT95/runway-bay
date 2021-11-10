import nodemailer from "nodemailer";
import {google} from "googleapis";
import dotenv from "dotenv";

dotenv.config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFERSH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI)

oAuth2Client.setCredentials({refresh_token: REFERSH_TOKEN});

export async function sendMail(memo) {
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
            to: process.env.ALL_TENANTS,
            subject: "Runway Bay Memo",
            text: memo,
            html: `<h1>${memo}</h1>`
        };

        const result = await transport.sendMail(mailOptions);
        return result

    } catch (error) {
        return error;
    }
};

