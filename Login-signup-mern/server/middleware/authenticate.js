import jwt from "jsonwebtoken";
import userdb from "../models/userSchema.js";

const Keysecret = "vikashkumaryadavvikashkumaryadav"


export const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // console.log(token);
        const verifytoken = jwt.verify(token, Keysecret)
        // get token and id 
        // console.log(verifytoken);
        const rootuser = await userdb.findOne({ _id: verifytoken._id });
        console.log(rootuser);
        if (!rootuser) { throw new Error("user not found") }
        req.token = token
        req.rootuser = rootuser
        req.userid = rootuser._id

        next();
    } catch (error) {
        res.status(401).json({ status: 401, message: "Unauthorized no token provided" });

    }
}