import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
const Home = () => {
  const addToCart = () => {
    toast.success("Product added to cart")
  }
  return (
    <div className="w-full bg-gray-100 text-black min-h-[80vh] flex flex-col justify-center items-center">
      <div className="">
        <h2 className="text-4xl font-bold m-10" >Home page</h2>
        <Link to="/products" className="bg-green-900 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-600 hover:text-slate-900 hover:scale-105 transition-all duration-300">Products</Link>
        <button onClick={addToCart}
          className="m-10 bg-green-900 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-green-600 hover:text-slate-900 hover:scale-105 transition-all duration-300"
        >Add to cart</button>

      </div>

    </div>

  )
}

export default Home;