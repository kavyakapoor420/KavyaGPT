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

//get all thread 
chatRouter.get('/thread',async(req,res)=>{
     try{
          const threads=await Thread.find({}).sort({updatedAt:-1}) // sort in descending order so -1 
          //descending order of updatedAT... most recent data on top displayed in Sidebar chat History

          res.json(threads)


     }catch(err){
          console.log(err) ;
          res.status(500).json({error:'failed to fetch threads'})
     }
})

chatRouter.get('/thread/:threadId',async(req,res)=>{
     const {threadID}=req.params 
     try{
           const thread=await Thread.findOne({threadID})
           if(!thread){
               res.status(404).json({error:'thread not found'})
           }
           res.json(thread.message)
     }catch(err){
          console.log(err) 
          res.status(500).json({error:'failed to fetch chat' })
     }
})

chatRouter.delete('/thread/:threadId',async(req,res)=>{
     const {threadId}=req.params 

     try{
          const deletedThread=await Thread.findOneAndDelete({threadId})

          if(!deletedThread){
               res.status(404).json({error:'thread could not be deleted'})
          }

          res.status(200).json({success:"thread deleted successfully"})
     }catch(err){
          console.log(err)
          res.status(500).json({error:"something went wrong"})
     }
})


export default chatRouter