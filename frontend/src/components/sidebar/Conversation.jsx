import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
const Conversation = (props) => {

  const {selectedConversation,setSelectedConversation}= useConversation();

  const isSelected = selectedConversation?._id === props.conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(props.conversation._id)
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-yellow-600 rounded p-2 py-1 cursor-pointer ${isSelected?"bg-yellow-600":""}`} onClick={ ()=>setSelectedConversation(props.conversation) }>
        <div className={`avatar ${isOnline ? "online":""}`}>
        <div className='w-12 rounded-full'>
            <img src={props.conversation.profilePic} alt="user avater" />
        </div>

        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-purple-300'>{props.conversation.fullName}</p>
                <span className='text-xl'></span>
            </div>
        </div>
      </div>
      <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation
