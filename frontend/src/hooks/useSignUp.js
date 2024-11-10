import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const{authUser,setAuthUser}=useAuthContext();

  const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
    const sucess = handleInputErrors({ fullName, userName, password, confirmPassword, gender })
    if (!sucess) return;
    setLoading(true)
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
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

  return { loading, signup }
}

export default useSignUp

function handleInputErrors({ fullName, userName, password, confirmPassword, gender }) {
  if (!fullName || !userName || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields")
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match")
    return false;
  }
  if (password.length < 6) {
    toast.error("Passwords must be atleast 6 characters")
    return false;
  }
  return true
}