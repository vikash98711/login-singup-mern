import express from "express";
import Connection from "./database/db.js";
// import dotenv from '.env';
import  cors  from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from './routes/route.js'
const app = express();

// dotenv.config();
// app.use(express.json())


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({extended: true}));

app.use(cookieParser());
app.use(cors());

app.use(router);

Connection();
app.listen(8000 ,()=>{
    console.log("server is connecting")
})