import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  // login function
  const handleLogin = (e) => {
    e.preventDefault();
    const isSuccess = true;
    if (isSuccess) {
      toast.success("Login successfully");
      navigate("/Tailwindshop");
    }
    else {
      toast.error("username or password is incorrect!");
    }
  }
  // Handle change username and password
  const handleChangeUserName = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (!value) return true;
  }
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) return true;
  }
  return (
    <div className='flex justify-center items-center h-[70vh] md:h-[90vh]
     bg-[url("https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")]
     bg-no-repeat bg-center bg-cover
    '>
      <div className='flex flex-col items-center justify-center gap-4 w-[80%] h-auto p-3 md:p-8 md:w-2/3 md:min-h-3/4
      backdrop-blur-md bg-white/30 rounded'>
        <h3 className='text-xl font-bold md:text-2xl -mb-1 mt-3 underline'>Sign In</h3>
        <form onSubmit={handleLogin}>
          <div className='flex items-center justify-center gap-2 m-3 w-full rounded relative group border-2 w-1/2 mx-auto px-2 py-2 focus-within:border-sky-900'>
            <input type="text"
              required
              onChange={handleChangeUserName}
              value={username}
              placeholder='Username'
              className='appearance-none w-full h-full focus:outline-none ' />
          </div>
          <div className='flex items-center justify-center gap-2 mt-6 w-full md:mt-7 rounded relative group border-2 w-1/2 mx-auto px-2 py-2 focus-within:border-sky-900'>
            <input type="password"
              required
              onChange={handleChangePassword}
              value={password}
              placeholder='Password'
              className='appearance-none w-full h-full focus:outline-none ' />
          </div>

          <div className='flex flex-col items-center justify-center gap-2 cursor-pointer m-3 w-full md:mt-7 rounded relative group border-2 w-1/2 mx-auto px-2 py-2 focus-within:border-sky-900'>
            <button className='cursor-pointer'>Login</button>
          </div>
          <div className='flex flex-col text-left gap-2 m-3 w-full md:mt-7 relative group w-1/2 mx-auto px-2 py-2 '>
            <p>Forgot your password? <span className='text-blue-900 cursor-pointer font-semibold'>Reset</span></p>
            <p>Don't have an account? <span className='text-blue-900 cursor-pointer font-semibold'>Sign Up</span></p>
          </div>

        </form>
      </div>
    </div>
  )
}
