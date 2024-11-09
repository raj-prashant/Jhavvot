import Button from "../../components/Button"
import Link from "../../components/link"
import TextInput from "../../components/TextInput"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">Sign up
          <span className="text-blue-500"> Jhavvot </span>
        </h1>
        <form >
          <TextInput label="Full Name" type="text" placeholder="Enter Your Full Name" />
          <TextInput label="Username" type="text" placeholder="Choose a username" />
          <TextInput label="Username" type="text" placeholder="Choose a username" />
          <TextInput label="Password" type="password" placeholder="Enter Password" />
          <TextInput label="Confirm Password" type="password" placeholder="Enter Password again" />
          <Link text="Already have an account?" />
          {/* Gender checkbox goes here */}
          <div className="flex">
          <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
            <span className="label-text">Male</span>
            <input type="checkbox" name="" className="checkbox border-slate-900" id="" /></label>
          </div>
          <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
            <span className="label-text">Female</span>
            <input type="checkbox" name="" className="checkbox border-slate-900" id="" /></label>
          </div>
          </div>
          <Button text="Sign up" />
        </form>
      </div>
    </div>
  )
}

export default SignUp
