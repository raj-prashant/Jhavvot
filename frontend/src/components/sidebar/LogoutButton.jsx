import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogOutButton = () => {
  const {loading,logout}= useLogout();
  return (
    <div className='mt-auto'>
      {!loading?(<BiLogOut onClick={logout} className="w-6 h-6 text-purple-700 cursor-pointer" />):(<span className="loading loading-spinner"></span>)}
    </div>
  )
}

export default LogOutButton
