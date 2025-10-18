import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import OfferSection from "../component/Offer";
import { useEffect, useState } from "react";
import hero from "../assets/hero-img.jpg"
import MyCustomer from "../component/MyCustomer";
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
        <div className="w-full text-black min-h-[80vh] flex flex-col justify-center bg-cover bg-center] "
              style={{ backgroundImage: `url(${hero})` }}
          >

        
        <div className="text-gray-900 text-left w-[80%] mx-auto text-slate-800">
          <h1 className="text-4xl font-bold ">Online Shop</h1>
          <h1 className="text-2xl text-slate-300">Lorem, ipsum dolor sit amet consec repudiandae nulla placeat voluptatum voluptas? Tempora miatur vero quae explicabo.</h1>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"><Link to="/products">Shop Now</Link></button>

        </div>
      </div>
      {/* popular products */}
      <div>
        <h1 className="text-4xl font-bold text-center my-4">Popular Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map(product => (
            <div key={product.id} className="shadow-lg p-2 rounded-sm shadow-mdtransform transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <Link to={"/products/" + product.id} key={product.id}>
              <img src={product.image} alt={product.title} className="w-[80%] h-38 object-contain mb-4 " />
              </Link>
              <h2 className="text-lg font-semibold text-gray-800">{product.title.slice(0, 20)}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={addToCart}>Add to Cart</button>
           <div>
            <h1 className="animate-dicount-show bg-red-600 rounded-md text-white">
            30% discount for you
           </h1>
           </div>
            </div>

          ))
          }
        </div>
      </div>
      {/* mycustomer section */}
      <MyCustomer />
      {/* offer */}
      <OfferSection />
    </div>
  )
}

export default Home;