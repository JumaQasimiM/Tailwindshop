import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import OfferSection from "../component/Offer";
import { useEffect, useState } from "react";
import hero from "../assets/hero.jpg"
const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8&sort=desc&rating=desc")
      .then(res => res.json()
        .then(data => setProducts(data)))
      .catch(err => console.log(err))
  }, [])

  const addToCart = () => {
    toast.success("Product added to cart")
  }
  return (
    <div>
      <div className="w-full bg-gray-100 text-black min-h-[80vh] flex flex-col justify-center
    bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center]
    ">

        <div></div>
        <div>
          <h1 className="text-4xl font-bold ">ONline Shop</h1>
          <h1 className="text-2xl">Lorem, ipsum dolor sit amet consec repudiandae nulla placeat voluptatum voluptas? Tempora miatur vero quae explicabo.</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link to="/products">Shop Now</Link></button>

        </div>
      </div>
      {/* popular products */}
      <div>
        <h1 className="text-4xl font-bold text-center my-4">Popular Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map(product => (
            <div key={product.id} className="shadow-lg border-b p-2 rounded-sm shadow-mdtransform transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <img src={product.image} alt={product.title} className="w-[80%] h-38 object-contain mb-4 " />
              <h2 className="text-lg font-semibold">{product.title.slice(0, 20)}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={addToCart}>Add to Cart</button>
            </div>

          ))
          }
        </div>
      </div>
      {/* offer */}
      <OfferSection />
    </div>
  )
}

export default Home;