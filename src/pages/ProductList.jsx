import { useState, useEffect } from "react";

import { toast } from "react-toastify";

// react icons
import { CiStar } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ProductCard } from "../component/ProductCard";

// import image
import Hero from "../assets/hero.jpg";
import adv1 from "../assets/adv1.png";
import { WeekOffer } from "../component/weekOffer";
import { Services } from "../component/services";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = () => {
    toast.success("Product added to cart");
  };

  // fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?_limit=10")
      .then((res) => res.json().then((data) => setProducts(data)))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {/* Categories + Search + Cart/Fav */}
      <section className="flex flex-wrap items-center justify-between gap-5  my-4 px-4 md:px-6">
        {/* Categories */}
        <ul className="flex flex-wrap items-center gap-4 md:gap-8 font-semibold text-green-600 w-full md:w-auto">
          <li className="cursor-pointer hover:text-sky-500 hover:-translate-y-1 transition">
            Men
          </li>
          <li className="cursor-pointer hover:text-sky-500 hover:-translate-y-1 transition">
            Women
          </li>
          <li className="cursor-pointer hover:text-sky-500 hover:-translate-y-1 transition">
            T-Shirt
          </li>
          <li className="cursor-pointer hover:text-sky-500 hover:-translate-y-1 transition">
            Shoes
          </li>
        </ul>

        {/* Search Box */}
        <div className="flex items-center w-full md:w-1/3 border border-sky-300 rounded-md overflow-hidden order-last md:order-none">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-3 focus:outline-none text-slate-700"
          />
          <FaSearch size={20} className="mx-3 text-sky-500 cursor-pointer" />
        </div>

        {/* Cart & Wishlist */}
        <ul className="flex items-center gap-6 text-green-600 w-full md:w-auto justify-center md:justify-end">
          {/* Cart */}
          <li className="relative cursor-pointer hover:text-sky-500 hover:-translate-y-1 transition">
            <MdOutlineShoppingCart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-400 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </li>

          {/* Wishlist */}
          <li className="relative cursor-pointer hover:text-sky-500 hover:-translate-y-1 transition">
            <FaRegHeart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-400 text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </li>
        </ul>
      </section>
      <div className="flex-col gap-1 md:flex md:flex-row min-h-sreen">
        {/* left - product */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-3 p-3">
          {/* card 1 */}
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {/* Right - advertisment */}
        <div className="flex-1 p-3">
          {/* Advertisement1 */}
          <div
            className="relative flex flex-col justify-start px-6 w-[95%] md:w-[80%] md:mx-auto 
             h-72 md:h-80 rounded text-white overflow-hidden 
             bg-cover bg-center bg-no-repeat py-3 mb-10"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="relative z-10 mt-10">
              <h3 className="inline-block bg-fuchsia-800 font-semibold px-4 py-1 rounded">
                Title Text Here
              </h3>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 text-yellow-300 drop-shadow">
                50% Sale
              </h1>

              <h5 className="text-lg md:text-xl mt-1 font-medium drop-shadow">
                On Winter Women’s Collection
              </h5>
            </div>

            {/* Product Image */}
            <img
              src={adv1}
              alt="Advertisement"
              className="absolute bottom-0 right-4 w-32 md:w-44 drop-shadow-lg"
            />
          </div>
          {/* Advertisement2 */}
          <div
            className="relative flex flex-col justify-start px-6 w-full md:w-[80%] mx-auto 
             h-72 md:h-80 rounded-lg text-white overflow-hidden shadow-lg
             bg-cover bg-center bg-no-repeat py-3 mb-7"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-green-500"></div>

            {/* Text Content */}
            <div className="relative z-10 mt-10">
              <h3 className="inline-block bg-fuchsia-800 font-semibold px-4 py-1 rounded">
                Title Text Here
              </h3>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 text-yellow-300 drop-shadow">
                50% Sale
              </h1>

              <h5 className="text-lg md:text-xl mt-1 font-medium drop-shadow">
                On Winter Women’s Collection
              </h5>
            </div>

            {/* Product Image */}
            <img
              src={adv1}
              alt="Advertisement"
              className="absolute bottom-0 right-4 w-32 md:w-44 drop-shadow-lg"
            />
          </div>
          {/* Advertisement3 */}
          <div
            className="relative flex flex-col justify-start px-6 w-full md:w-[80%] mx-auto 
             h-72 md:h-80 rounded-lg text-white overflow-hidden shadow-lg
             bg-cover bg-center bg-no-repeat py-3 mb-7"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-cyan-800"></div>

            {/* Text Content */}
            <div className="relative z-10 mt-10">
              <h3 className="inline-block bg-orange-400 font-semibold px-4 py-1 rounded">
                Title Text Here
              </h3>

              <h1 className="text-4xl md:text-5xl font-bold mt-4 text-white drop-shadow">
                50% Sale
              </h1>

              <h5 className="text-lg md:text-xl mt-1 font-medium drop-shadow text-yellow-300">
                On Winter Women’s Collection
              </h5>
            </div>

            {/* Product Image */}
            <img
              src={adv1}
              alt="Advertisement"
              className="absolute bottom-0 right-4 w-32 md:w-44 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* offer section */}
      <WeekOffer />
      {/* services */}
      <Services />
    </main>
  );
};

export default ProductList;
