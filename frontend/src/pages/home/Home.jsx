import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4">
      <div className="flex h-[80vh] w-[80vw] sm:hidden min-h-[450px] sm:min-h-[450px] md:min-h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        {selectedConversation ? <MessageContainer /> : <Sidebar />}
      </div>
      <div className="hidden h-[80vh] w-[80vw] sm:flex sm:min-h-[450px] md:min-h-[550px] rounded-lg overflow-hidden bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
