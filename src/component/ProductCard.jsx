import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
export const ProductCard = ({ id, image, title, price, addToCart }) => {
  return (
    <div className="mx-4 p-3 mb-7 h-80 rounded border-1 border-sky-400 hover:shadow shadow-sky-200 transition">
      <Link to={"/products/" + id} key={id}>
        <img
          className="w-full h-[60%] object-contain rounded cursor-pointer hover:scale-105 transition-all duration-300"
          src={image}
          alt=""
        />
      </Link>
      <h2 className="mt-3 font-semibold">{title.slice(0, 20)}</h2>

      <p className="mt-4 font-semibold">$ {price}</p>
      {/* Button */}
      <button
        onClick={addToCart}
        className="mt-1 w-2/3 mx-auto flex items-center justify-center gap-2 bg-sky-500 text-white py-2 rounded text-sm transition-all duration-300 hover:bg-sky-600 hover:shadow-md hover:shadow-sky-200 active:scale-95"
      >
        Add to Cart
        <MdOutlineShoppingCart size={20} />
      </button>
    </div>
  );
};
