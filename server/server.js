import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js"
import cookieParser from "cookie-parser"

connectDB();
const app = express()

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))

app.use(cookieParser())

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.get('/', (req,res) => {
    res.json({
        message:"hello atharva"
    })
})

const PORT = process.env.PORT || 7070;

app.listen(PORT , () => {
    console.log(`server is listening at PORT:${PORT} `)
})