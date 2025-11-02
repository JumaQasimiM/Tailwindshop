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
    fetch("https://fakestoreapi.com/products?limit=5&sort=desc&rating=desc")
      .then((res) => res.json().then((data) => setProducts(data)))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = () => {
    toast.success("Product added to cart");
  };
  return (
    <div>
      {/* slider */}
      <Slider />
      {/* category */}
      <Category />
      {/* popular products */}
      <div>
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Popular <span className="text-pink-600">Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center shadow-md p-2 pb-3 my-5 rounded-sm shadow-mdtransform transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Link to={"/products/" + product.id} key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[80%] h-38 object-contain mb-4 "
                />
              </Link>
              <h2 className="text-lg font-semibold text-gray-800">
                {product.title.slice(0, 20)}
              </h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                className="bg-pink-700 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={addToCart}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* mycustomer section */}
      <MyCustomer />
      {/* offer */}
      <OfferSection />
    </div>
  );
};

export default Home;
