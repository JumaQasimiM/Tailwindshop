import { useEffect, useState } from "react";
import { FaTshirt, FaGem, FaLaptop, FaFemale } from "react-icons/fa";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  // Map each category to an icon
  const categoryIcons = {
    "men's clothing": <FaTshirt size={30} />,
    "women's clothing": <FaFemale size={30} />,
    jewelery: <FaGem size={30} />,
    electronics: <FaLaptop size={30} />,
  };

  //   fetch data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // Extract unique category names
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="bg-cyan-900 text-white font-semibold flex justify-center flex-wrap items-center gap-5 md:gap-10 my-5 py-5">
      {categories.map((cat) => (
        <div
          key={cat}
          className="flex flex-col items-center hover:text-cyan-300 cursor-pointer transition-all duration-300"
        >
          <div className="mb-2">
            {categoryIcons[cat] || <FaGem size={30} />} {/* fallback icon */}
          </div>
          <p className="capitalize text-[10px] md:text-xl">{cat}</p>
        </div>
      ))}
    </div>
  );
}
