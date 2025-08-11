// this is schema for chats -> thread 
// ThreadSchema -> threadId(unique), title(that can be displayed in sidebar for referncing history)
//message(user,assistant/Model -> eg "hello" user ," hi how can i help u today" assistant)
//createdAt (date) , updatedAt (used to sort message in order of creation , based on recent message asked to display on top of sidebar)
// MessageSchema -> content, role(user,assistant),timestamp or  messageid(unique), text, senderId, threadId, timestamp
// UserSchema -> userId(unique), name, email, password, profilePic, chats(threadId)



import mongoose from 'mongoose'

const MessageSchema=new mongoose.Schema({
    role:{
        type:String,
        enum:["assistant","user"],
        required:true 
    },
    content:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now 
    }
})

const threadSchema=new mongoose.Schema({
    threadID:{
        type:String,
        required:true,
        unique:true
    },
    title:{
        type:String,
        default:'new chat'
    },
    messages:[MessageSchema],
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now 
    }
})


const Thread=mongoose.model("Thread",threadSchema)


export default Thread ; 