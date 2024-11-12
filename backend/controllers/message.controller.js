import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage= async (req,res)=>{
    try {
        const {message} = req.body;
        const {id:receiverId}= req.params;
        const senderId= req.user._id;

        let conversation= await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],

            })
        }
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })
        
        if (newMessage) {
            conversation.messages.push(newMessage._id);
            
        }
        
        //Socket io functionality to make it real time
        const recieverSocketId= getRecieverSocketId(receiverId);
        if (recieverSocketId) {
            //io.to(recieverSocketId).emit()  is used to send events to specific client
            io.to(recieverSocketId).emit("newMessage",newMessage)
        }


        // await conversation.save()
        // await newMessage.save();

        await Promise.all([conversation.save(),newMessage.save()])//This runs in parallel

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in sendMessages", error.message);
        res.status(500).json({error:"Internal server error"});

    }
}
export const getMessage = async (req, res)=>{
    try {
        const {id:userToChatId}=req.params;
        const currentUserId=req.user._id;

        let conversation= await Conversation.findOne({
            participants:{$all:[currentUserId,userToChatId]}
        }).populate("messages")

        if (!conversation) return res.status(200).json([])
        
        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log("error in getMessages", error.message);
        res.status(500).json({error:"Internal server error"});

    }
}