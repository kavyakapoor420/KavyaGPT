import express from 'express'
import cors from 'cors'
import OpenAI from 'openai'
import mongoose from 'mongoose'
import { mongo_uri } from './utils/openai.js'
import chatRouter from './routes/chat.js'

const app=express()

app.use(express.json()) // Middleware to parse incoming request bodies in a way that is easy to use 
app.use(cors())





const connectDB=async ()=>{
    await mongoose.connect(mongo_uri)
}

connectDB().then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err)
})


app.use('/chats',chatRouter)



app.get('/',(req ,res)=>{
    res.send('hello from root route')
})

app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})