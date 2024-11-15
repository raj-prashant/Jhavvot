import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"
import useConversation from "../../zustand/useConversation"

const Home = () => {
  const {selectedConversation}= useConversation();
  console.log(selectedConversation);
  
  return (
    <>
    <div className="flex md:hidden h-[450px] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
    {selectedConversation?<MessageContainer />:<Sidebar />}
    </div>
    <div className="hidden md:flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
    </>)
}

export default Home
