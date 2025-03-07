import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe?"chat-end":"chat-start";
  const profilePic=fromMe?authUser.profilePic:selectedConversation.profilePic;
  const bubbleBgColor = fromMe?'bg-yellow-500':"bg-purple-200";
  const formattedTime = extractTime(message.createdAt)
  
  return (
    <div className={`chat ${chatClassName} `}>
    <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src={profilePic} alt="Sender Avatar" />
        </div>
    </div>
    <div className={`chat-bubble text-purple-700 ${bubbleBgColor} pb-2`}>
    {message.message} 
    </div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 item-center '>
        {formattedTime}
    </div>
    </div>
  )
}

export default Message
