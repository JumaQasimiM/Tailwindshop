import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export const ProductCard = ({ id, image, title, price, rating, addToCart }) => {
  return (
    <div className="mx-4 p-3 mb-7 h-[20rem] rounded border border-sky-400 hover:shadow shadow-sky-200 transition">
      <Link to={`/products/${id}`}>
        <img
          className="w-full h-[57%] object-contain rounded cursor-pointer hover:scale-105 transition-all duration-300"
          src={image}
          alt={title}
        />
      </Link>

      <h2 className="mt-3 font-semibold">{title?.slice(0, 20)}</h2>
      <p className="text-amber-500">
        {"★".repeat(Math.round(rating?.rate || 0))}
        {"☆".repeat(5 - Math.round(rating?.rate || 0))}
      </p>

      <p className="mt-0.4 font-semibold">$ {price}</p>

      <button
        onClick={() => addToCart(id)}
        className="cursor-pointer mt-1 w-2/3 mx-auto flex items-center justify-center gap-2 bg-sky-500 text-white py-2 rounded text-sm transition-all duration-300 hover:bg-sky-600 hover:shadow-md hover:shadow-sky-200 active:scale-95"
      >
        <MdOutlineShoppingCart size={20} /> Add to Cart
      </button>
    </div>
  );
};
