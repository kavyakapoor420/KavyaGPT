
import OpenAI from 'openai'

const client=new OpenAI({
    apiKey:""
})


const response=await client.responses.create({
    model:"gpt-4o-mini",
    input:"what is value of 2+2"
})

console.log(response)


const connectDB2=async()=>{
    try{
         await mongoose.connect(mongo_uri)
         console.log('connected to mongodb ')
    }catch(err){
        console.log('failed to connect with Db due to this error',err)
    }
}
