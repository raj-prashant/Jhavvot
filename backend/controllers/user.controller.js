import User from "../models/user.model.js";

export const getUsersForSidebar = async (req,res) =>{
    try {
        const loggedInUserId = req.user._id
        const allUser = await User.find({_id:{$ne:loggedInUserId }}).select("-password");
        res.status(200).json(allUser)
    } catch (error) {
        console.log("error in getUsersForSidebar : ",error.message);
        
        return res.status(500).json({error:"Internal server error"});
    }
}