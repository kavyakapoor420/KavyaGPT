import express from 'express'
import Thread from '../models/Thread.js'

const chatRouter=express.Router() 

chatRouter.get('/test',async(req,res)=>{
    try{
         const thread=new Thread({
            threadID:'xyz2',
            title:"testing new thread"
         })
         const response=await thread.save() 
         
         res.send(response.title)
        
    }catch(err){
         console.log(err)
         res.status(500).json({err:'failed to save in DB'})
    }
})

export default chatRouter