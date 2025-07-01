import express from 'express';
import userRoutes from "../src/routes/userRoutes.js"
import connectDb from "../src/config/db.js"
import { configDotenv } from 'dotenv';

const app = express()

configDotenv()

connectDb()

app.get('/',(req,res)=>{
    res.status(200).json({
        message: 'Hello, World!',
    })
    res.send('Hello World')
})

app.use('/api',userRoutes)
























const port = process.env.PORT
app.listen(port,()=>{
    console.log(`Port started at ${port}` )
})