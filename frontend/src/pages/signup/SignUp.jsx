import { useState } from "react"
import Button from "../../components/Button"
import MyLink from "../../components/MyLink"
import TextInput from "../../components/TextInput"
import useSignUp from "../../hooks/useSignUp"

const SignUp = () => {
  const [inputs, setInputs] =  useState({
    fullName: "",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
  const{loading,signup}=useSignUp()
  const handleCheckboxChange = (gender) =>{
    setInputs({...inputs,gender})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(inputs);
    await signup(inputs)

    
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Sign up
          <span className="text-blue-500"> Jhavvot </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <TextInput label="Full Name" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} type="text" placeholder="Enter Your Full Name" />
          <TextInput label="Username" value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})} type="text" placeholder="Choose a username" />
          <TextInput label="Password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} type="password" placeholder="Enter Password" />
          <TextInput label="Confirm Password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} type="password" placeholder="Enter Password again" />
          
          {/* Gender checkbox goes here */}
          <div className="flex mt-2">
          <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer ${inputs.gender==="male" ? "selected" : ""}`}>
            <span className="label-text">Male</span>
            <input type="checkbox" name="" className="checkbox border-slate-900"  checked={inputs.gender==="male"} onChange={()=>handleCheckboxChange("male")} /></label>
          </div>
          <div className="form-control">
            <label htmlFor="" className={`label gap-2 cursor-pointer ${inputs.gender==="female" ? "selected" : ""}`}>
            <span className="label-text">Female</span>
            <input type="checkbox" name="" className="checkbox border-slate-900"  checked={inputs.gender==="female"} onChange={()=>handleCheckboxChange("female")} /></label>
          </div>
          </div>
          <MyLink to="/login" text="Already have an account?" />
          <Button text={!loading?("Sign up"):(<span className="loading loading-spinner"></span>)} disabled={loading} />
          {/* {!loading?(<Button text="Sign up" />):(<span className="loading loading-spinner"></span>)} */}
        </form>
      </div>
    </div>
  )
}

export default SignUp
