import express from 'express'
import cors from 'cors'
import OpenAI from 'openai'

const app=express()

app.use(express.json()) // Middleware to parse incoming request bodies in a way that is easy to use 
app.use(cors())


const client=new OpenAI({
    apiKey:""
})


const response=await client.responses.create({
    model:"gpt-4o-mini",
    input:"what is value of 2+2"
})


app.post('/test',async(req,res)=>{
    const options={
        method:"POST",
        headers:{
            "Content-type":"application/json",
            "Authorization":`Bearer ${process.env.OpenAI_Api_Key}`,
        },
        body:JSON.stringify({
            model:"gpt-4o-mini",
            mesages:[{
                role:"user",
                content:req.body.message 
            }]
        })
    }

    try{
          const response=await fetch('https://api.openai.com/v1/chat/completion',options)
          const data=await response.json() 
           
          const reply=data.choices[0].message.content 
          //console.log(reply)

          res.status(200).send(reply) 
    }catch(err){

    }
})

console.log(response)


app.listen(3000,()=>{
    console.log('server is listening on port 3000')
})