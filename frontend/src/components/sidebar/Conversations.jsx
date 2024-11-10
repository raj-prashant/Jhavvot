import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"

const Conversations = () => {
  const {loading,conversations}= useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
    {conversations.map((conversation) => (
      <Conversation key={conversation._id} conversation={conversation}  />
      ))}
      {!loading?null:(<span className="loading loading-spinner"></span>)}
    </div>
  )
}

export default Conversations
