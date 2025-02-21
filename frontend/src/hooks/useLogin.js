import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser}=useAuthContext();

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
      if (data.error) {
        throw new Error(data.error);
      }
      //context
      setAuthUser(data);
      //localstorage
      localStorage.setItem("jhavvot-user",JSON.stringify(data))
    } catch (error) {
      toast.error(error.message)
      console.log(error);
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
