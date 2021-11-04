import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
    try {
        console.log("req.body", req.body)

        const token = req.headers.authorization.split(" ")[1];
        //if > 500, it is Google Auth token
        const isCustomAuth = token.length < 500;
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_KEY);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();

    } catch (error) {
        console.log(error)
    }
}
