import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const{authUser,setAuthUser}=useAuthContext();

  const login = async ({ userName, password}) => {
    const sucess = handleInputErrors({userName, password})
    if (!sucess) return;
    setLoading(true)
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password})
      })
      const data = await res.json();
      console.log(data);
      if (data.error) {
        throw new Error(data.error);
        
      }
      //localstorage
      localStorage.setItem("jhavvot-user",JSON.stringify(data))
      //context
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message)
    }
    finally {
      setLoading(false);

    }
  }

  return { loading, login }
}

export default useLogin

function handleInputErrors({userName, password}) {
  if (!userName || !password) {
    toast.error("Please fill all the fields")
    return false;
  }
  if (password.length < 6) {
    toast.error("Invalid Password")
    return false;
  }
  return true
}