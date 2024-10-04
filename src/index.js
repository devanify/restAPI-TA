import express from "express";
import'dotenv/config'
import logRequest from './middleware/logs.js';
import dbPool from "./config/dbconfig.js";

//routes
import achievementsRouter from "./routes/achievements.js";

const app = express()

app.use(logRequest)
app.use(express.json())

// app.method('path', handler)
app.use('/achievements', achievementsRouter)

//runing server
app.listen(process.env.PORT, ()=>{
    console.log(`server up on http://localhost:${process.env.PORT}`);
})