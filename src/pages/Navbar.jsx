import { useState } from "react";
import BarIcon from "../component/BarIcon";
import X from "../component/X";
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [fullW, setFullW] = useState(true)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <nav className="flex justify-between items-center bg-slate-400 p-3">
      <div className="text-2xl text-orange-900 font-semibold cursor-pointer">Shoping</div>
      <ul className="hidden  md:flex gap-4 cursor-pointer items-center ">
        <li className="relative group">Home
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <li className="relative group">About
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <li className="relative group">Contact
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>

        </li>
        <li className="relative group">Cart
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>

        </li>
        <button className="bg-green-900 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-600 hover:text-slate-900 hover:scale-105 transition-all duration-300"> Sign In</button>
        <button className="bg-green-900 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-600 hover:text-slate-900 hover:scale-105 transition-all duration-300"> Sign Up</button>

      </ul>

      <div className="md:hidden cursor-pointer"
        onClick={handleOpen}
      >
        {open ? <X /> : <BarIcon />}
      </div>
      {/* Mobile menu */}
      <ul className={open ? "w-full md:hidden fixed top-0 left-0 sm:w-[60%] h-screen bg-slate-400 border-r border-r-slate-900 ease-in-out duration-500 flex flex-col items-center"
        : "fixed top-0 bottom-0 left-[-100%] ease-in-out duration-500 w-full duration-500"}
      >
        {open && <div
          onClick={handleOpen}
          className="fixed top-5 right-3 cursor-pointer sm:hidden md:hidden border border-slate-900 rounded-full p-1">
          <X />
        </div>}
        <h1 className="mt-5 font-bold text-2xl text-orange-900">Shoping</h1>
        <li className="nav-li">Home</li>
        <li className="nav-li">About</li>
        <li className="nav-li">Contact</li>
        <li className="nav-li">Cart</li>
        <button className="nav-btn"> Sign In</button>
        <button className="nav-btn"> Sign Up</button>
      </ul>
    </nav >
  )
}
export default Navbar;