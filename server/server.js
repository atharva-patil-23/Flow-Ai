import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/db.js"

connectDB();
const app = express()

app.use(express.json())
app.use(cors());

app.get('/', (req,res) => {
    res.json({
        message:"hello atharva"
    })
})

const PORT = process.env.PORT || 7070;

app.listen(PORT , () => {
    console.log(`server is listening at PORT:${PORT} `)
})