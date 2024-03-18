import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser"
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/bookRoute.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();  //.env files ke variables use krne ke liye under process.env


const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(()=>{

    console.log("DB connected successfully");

    
    //start the express server
    app.listen(PORT, ()=>{
        console.log(`Server is running on port: ${PORT}`);
    })

}).catch(error => console.log(error));//catch and print errors during connection


app.use("/api", route);  //"/api/endpoint 1" request will go in route and /endpoint1 waali route will run