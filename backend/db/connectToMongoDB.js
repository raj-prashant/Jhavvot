import mongoose from "mongoose";

const connectToMongDB=async () => {
    try {
        mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to mongodb");
        
    } catch (error) {
        console.log("Error connect to mongo DB");
        
    }
}
export default connectToMongDB;