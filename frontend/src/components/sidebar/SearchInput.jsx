import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchInput = () => {
    const [search,setSearch]=useState();
    const {setSelectedConversation} = useConversation();
    const {conversations}= useGetConversations()
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (!search) return;
        if (search.length <3 ) {
            return toast.error("Search term must be atleast 3 characters long")
        }
        const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")

        } else toast.error("No such user found")
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-2">
            <input type="text" placeholder="Search..." className="max-sm:w-full input input-bordered rounded-ful  bg-yellow-600 border-yellow-700 text-purple-700 placeholder-purple-300" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
            <button type="submit" className='btn btn-circle bg-yellow-600 text-purple-600 border-yellow-700 hover:bg-yellow-700'>
                <IoSearchSharp className="w-6 h-6 outline-none"/>
            </button>
        </form>
    )
}

export default SearchInput
