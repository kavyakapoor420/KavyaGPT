
export const mongo_uri='mongodb+srv://kavyakapoor413:Helloworld@cluster01.4zpagwq.mongodb.net/KavyaGPT?retryWrites=true&w=majority&appName=Cluster01'


export const getOpenAIAPIResponse=async(message)=>{
     
    const options={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${process.env.OPEN_AI_API_KEY}`
        },
        body:JSON.stringify({
            model:"gpt-4o-mini",
            messages:[{
                role:"user",
                content:message 
            }]
        })
    } ; 


    try{
         const response=await fetch('https://api.openai.com/v1/chat/completions',options)
         const data=await response.json() ;
         const output=data.choices[0].message.content ; 

         res.send(output)

    }catch(err){
        console.log(err) 
        res.send(500).json({message:'something went wrong'})
    }
}




