import { useState } from "react"
import Button from "../../components/Button"
import MyLink from "../../components/MyLink"
import TextInput from "../../components/TextInput"
import useLogin from "../../hooks/useLogin"

const Login = () => {
  const [inputs, setInputs] =  useState({
    userName:"",
    password:"",
  })
  const {loading,login}= useLogin();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    await login(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login
        <span className="text-purple-700"> Jhavvot </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <TextInput label="Username" placeholder="Enter Username" value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})} type="text" />
          <TextInput label="Password" placeholder="Enter Password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} type="password" />
          <MyLink to="/signup" text="Don&apos;t have an account?" />
          <Button text={!loading?("Login"):(<span className="loading loading-spinner"></span>)} disabled={loading} />
        </form>
      </div>
    </div>
  )
}

export default Login
