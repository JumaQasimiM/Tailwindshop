import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

// import logo
import logo from "../assets/logo.png";
export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [stock, setStock] = useState(10);
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
      setActiveImage(data.image); // set main image
      setLoading(false);
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    if (!product.category) return; // wait for category to load

    fetch(`https://fakestoreapi.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => setRelated(data));
  }, [product.category]);

  // Add to cart
  const addToCart = () => {
    toast.success("Product added to cart");
  };

  const addQuantity = () => {
    if (quantity < stock) setQuantity(quantity + 1);
    else toast.error("Out of stock");
  };

  const lessQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  if (loading)
    return (
      <p className="text-center font-semibold text-gray-500">Loading...</p>
    );

  const discountedPrice = (product.price * 0.88).toFixed(2); // 12% off

  return (
    <section>
      <div className="flex flex-col lg:flex-row p-6 gap-16">
        {/* LEFT IMAGES */}
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImage}
            alt={product.title}
            className="w-full h-[60vh] object-contain bg-gray-200 rounded-md p-1"
          />

          <div className="flex gap-2 justify-around h-16">
            {[logo, product.image, product.image, product.image].map(
              (img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="thumbnail"
                  className="w-16 h-16 rounded-md cursor-pointer border p-1"
                  onClick={() => setActiveImage(img)}
                />
              )
            )}
          </div>
        </div>

        {/* RIGHT INFO */}
        <div className="flex flex-col gap-4 lg:w-2/4 text-left">
          <div className="border-b pb-3">
            <p className="text-gray-500">{product.category}</p>

            <h5 className="font-semibold text-violet-600 mt-1 mb-3">
              {product.title}
            </h5>

            <div className="flex justify-between items-center mx-2">
              <h3 className="font-bold text-xl">
                <span className="text-gray-400 line-through">
                  ${discountedPrice}
                </span>
                <span className="ml-2">${product.price}</span>
              </h3>

              <p className="font-semibold text-lg">
                <span className="text-amber-600">★</span> {product.rating?.rate}
              </p>
            </div>
          </div>

          <h3>
            <span className="font-semibold text-orange-600">{stock}</span> in
            stock
          </h3>

          <p className="font-semibold">Description:</p>
          <p className="text-gray-700 -mt-3">{product.description}</p>

          {/* Quantity + Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <div className="flex items-center gap-1">
              <button
                className="cursor-pointer px-4 py-1 bg-gray-200 text-orange-900 rounded-sm"
                onClick={lessQuantity}
              >
                -
              </button>

              <span className="text-orange-900 text-xl font-semibold px-4 py-1">
                {quantity}
              </span>

              <button
                className="cursor-pointer px-4 py-1 bg-gray-200 text-orange-900 rounded-sm"
                onClick={addQuantity}
              >
                +
              </button>
            </div>

            <button
              className="bg-sky-600 text-white px-6 py-2 rounded-sm cursor-pointer"
              onClick={addToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
        {/* section - leated product */}
      </div>
      <div className="w-full p-2 my-3">
        <div className="flex justify-between items-center border-b mb-4 pb-1">
          <p className="">Related Products</p>
          <Link
            to={`/products/`}
            className=" text-blue-500 px-2 py-1 rounded mt-1"
          >
            view product
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {related.map((item) => (
            <div key={item.id} className="p-2 bg-gray-100 rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-24 object-contain"
              />
              <p className="text-sm font-semibold mt-3">
                {item.title.slice(0, 20)}
              </p>
              <p className="text-yellow-500">
                {"★".repeat(Math.round(item.rating?.rate || 0))}
                {"☆".repeat(5 - Math.round(item.rating?.rate || 0))}
              </p>
              <p className="font-bold mb-2">${item.price}</p>

              <Link
                to={`/products/${item.id}`}
                className="bg-blue-600 text-white px-2 py-1 rounded mt-2"
              >
                view product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
