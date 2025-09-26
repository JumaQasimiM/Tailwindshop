import { useState } from "react";
import BarIcon from "../component/BarIcon";
import X from "../component/X";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <nav className="flex justify-between items-center bg-slate-900 p-3 z-100 text-white">
      <div className="flex items-center gap-0 text-2xl text-orange-900 font-semibold cursor-pointer">
        <h2 className="text-2xl font-bold text-pink-500">Shop<span className='text-prink-600'>.</span></h2>
      </div>
      <ul className="hidden  md:flex gap-4 cursor-pointer items-center ">
        <li className="relative group">
          <Link to={"/Tailwindshop"}>Home</Link>
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to={"/about"}>About</Link>
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to={"/contact"}>Contact</Link>
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to={"/products"}>Products</Link>
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <li className="relative group">
          <Link to={"/cart"}>Cart</Link>
          <span className="absolute -bottom-2 left-0 w-full opacity-0 h-[2px] bg-green-900 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-300"></span>
        </li>
        <button className="bg-green-900 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-600 hover:text-slate-900 hover:scale-105 transition-all duration-300"> <Link to={"/login"}>Sign In</Link></button>

      </ul>

      {/* mobile menu icon */}
      <div className="flex gap-3 items-center justify-center md:hidden cursor-pointer" >

        <div className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <span className="absolute -top-1 -right-2 bg-orange-500 text-white rounded-full min-w-4 h-4 flex justify-center items-center">2</span>
        </div>
        {/* <div className="relative mr-1 sm:mx-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroklidth="1.5" stroke="currentColor" className="size-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full min-w-4 h-4 flex justify-center items-center">20</span>
        </div> */}

        <span onClick={handleOpen}>{open ? <X /> : <BarIcon />}</span>

      </div>
      {/* Mobile menu */}
      <ul
        className={open ? "w-[70%] md:hidden fixed top-0 left-0 sm:w-[60%] h-screen bg-slate-400 border-r border-r-slate-900 ease-in-out duration-500 flex flex-col items-center z-10000"
          : "fixed top-0 bottom-0 left-[-100%] ease-in-out duration-500 w-full duration-500 z-10000"}
      >
        <h1 className="mt-5 font-bold text-2xl text-orange-900">Shoping</h1>
        <li className="nav-li" onClick={handleOpen}><Link to={"/Tailwindshop"}>Home</Link></li>
        <li className="nav-li" onClick={handleOpen}><Link to={"/about"}>About</Link></li>
        <li className="nav-li" onClick={handleOpen}><Link to={"/contact"}>Contact</Link></li>
        <li className="nav-li" onClick={handleOpen}><Link to={"/products"}>Products</Link></li>
        <button className="nav-btn" onClick={handleOpen}> <Link to={"/login"}>Sign In</Link></button>
        <button className="nav-btn" onClick={handleOpen} > <Link to={"/Tailwindshop"}>Sign Up</Link></button>
      </ul>

    </nav >
  )
}
export default Navbar;