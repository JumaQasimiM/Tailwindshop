import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OfferSection from "../component/Offer";
import { useEffect, useState } from "react";
import MyCustomer from "../component/MyCustomer";
import Category from "../component/category";
import Slider from "../component/slider";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .sort((a, b) => b.rating.rate - a.rating.rate) // sort by rating desc
          .slice(0, 5); // only 5 popular products

        setProducts(sorted);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = () => {
    toast.success("Product added to cart");
  };

  return (
    <div>
      {/* Slider */}
      <Slider />

      {/* Category */}
      <Category />

      {/* Popular products */}
      <div>
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-12">
          Popular <span className="text-sky-600">Products</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden 
             hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mx-3"
            >
              {/* Badge */}
              <span
                className="z-100 absolute top-2 left-2 bg-sky-600 text-white text-xs font-semibold 
                  px-3 py-1 rounded-md shadow-md"
              >
                ⭐ Popular
              </span>

              {/* Product Image */}
              <Link to={`/products/${product.id}`}>
                <div className="w-full h-40 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Content */}
              <div className="px-4 pb-4 text-center">
                {/* Title */}
                <h2 className="text-md font-semibold text-gray-800 h-12 overflow-hidden">
                  {product.title.slice(0, 30)}...
                </h2>

                {/* Price */}
                <p className="text-xl font-bold text-sky-600 mt-1">
                  ${product.price}
                </p>

                {/* Rating */}
                <div className="flex justify-center items-center mt-1 text-yellow-400 text-sm">
                  {"★".repeat(Math.round(product.rating.rate))}
                  {"☆".repeat(5 - Math.round(product.rating.rate))}
                  <span className="text-gray-500 text-xs ml-2">
                    ({product.rating.count})
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  className="mt-4 w-full py-2 bg-sky-600 text-white text-sm font-semibold rounded-md 
                 shadow-md transition-all duration-300 
                 group-hover:bg-pink-700 group-hover:shadow-lg"
                  onClick={addToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer section */}
      <MyCustomer />

      {/* Offer */}
      <OfferSection />
    </div>
  );
};

export default Home;
