import express from "express";
import {User, UserLogin,ValidUserLogin} from "../controller/userController.js";
import {authenticate} from "../middleware/authenticate.js"
// import  from "../controller/userController.js";

const router = express.Router();


// for user register 

router.post("/register",User)
router.post("/login",UserLogin)
router.get("/validuser",authenticate,ValidUserLogin)

export default router;
