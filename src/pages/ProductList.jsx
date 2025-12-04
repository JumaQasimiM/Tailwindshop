import { useState, useEffect } from "react";
import { toast } from "react-toastify";

// Icons
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

// Components
import { ProductCard } from "../component/ProductCard";
import { WeekOffer } from "../component/weekOffer";
import { Services } from "../component/services";

// Images
import adv1 from "../assets/adv1.png";
import adv2 from "../assets/adv2.png";
import adv3 from "../assets/adv3.png";

// Advertisement Data
const advs = [
  {
    id: 1,
    title: "Title Text Here",
    discount: "50% Sale",
    desc: " On Winter Women’s Collection",
    image: adv1,
  },
  {
    id: 2,
    title: "Title Text Here",
    discount: "70% Sale",
    desc: " On Winter Women’s Collection",
    image: adv2,
  },
  {
    id: 3,
    title: "Title Text Here",
    discount: "30% Sale",
    desc: " On Winter Women’s Collection",
    image: adv3,
  },
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=asd")
      .then((res) => res.json())
      .then((data) => {
        const from15 = data.slice(10, data.length);
        setProducts(from15);
      })
      .finally(() => setLoading(false));
  }, []);

  // add to card
  const addTocard = (id) => {
    toast.success("Product added to card." + id);
  };
  return (
    <main className="w-full min-h-screen">
      {/* ======= HEADER (Categories + Search + Cart) ======= */}
      <section className="flex flex-wrap items-center justify-between gap-5 py-4 px-4 md:px-6 bg-gray-50 ">
        {/* Categories */}
        <ul className="flex flex-nowrap items-center gap-6 text-green-700 font-semibold">
          {["Men", "Women", "T-Shirt", "Shoes"].map((c) => (
            <li
              key={c}
              className="cursor-pointer hover:text-blue-500 hover:-translate-y-1 transition duration-300"
            >
              {c}
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="flex items-center w-full md:w-1/3 border border-blue-300 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-3 focus:outline-none text-gray-700"
          />
          <FaSearch size={20} className="mx-3 text-blue-500 cursor-pointer" />
        </div>

        {/* Cart & Wishlist */}
        <ul className="hidden md:flex items-center gap-6 text-green-700">
          <li className="relative cursor-pointer hover:text-blue-500 transition">
            <MdOutlineShoppingCart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </li>

          <li className="relative cursor-pointer hover:text-blue-500 transition">
            <FaRegHeart size={22} />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </li>
        </ul>
      </section>

      {/* ======= MAIN CONTENT ======= */}
      <div className="flex flex-col md:flex-row gap-4 mt-4 px-4">
        {/* LEFT — PRODUCTS */}
        <div className="flex-[3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <p className="text-center text-gray-500 col-span-full">
              Loading products...
            </p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                addToCart={addTocard}
              />
            ))
          )}
        </div>

        {/* RIGHT — ADVERTISEMENTS */}
        <div className="flex-1 space-y-6">
          {advs.map((adv) => (
            <div
              key={adv.id}
              className="relative h-80 mb-11 rounded overflow-hidden flex items-start px-6 py-4 text-white bg-cover bg-center"
              style={{ backgroundImage: `url(${adv.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 mt-6">
                <h4 className="inline-block bg-purple-700 px-3 py-1 rounded text-sm font-semibold">
                  {adv.title}
                </h4>

                <h1 className="text-4xl font-bold mt-3 text-yellow-300 drop-shadow">
                  {adv.discount}
                </h1>

                <p className="text-lg mt-1 font-medium drop-shadow">
                  {adv.desc}
                </p>
              </div>

              <img
                src={adv.image}
                alt="Advertisement"
                className="absolute bottom-0 right-4 w-32 drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <WeekOffer />
      <Services />
    </main>
  );
};

export default ProductList;
