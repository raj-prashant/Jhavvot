import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
config();
const PORT= process.env.PORT || 5001;
const __dirname= path.resolve();
app.use(express.json()); // to parse json payload
app.use(cookieParser()); // to parse cookies


app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    connectToMongDB();
});