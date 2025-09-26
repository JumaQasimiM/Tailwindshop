import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

// react icons
import { CiStar } from "react-icons/ci";
import { IoMdStarHalf } from "react-icons/io";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const addToCart = () => {
    toast.success("Product added to cart")
  }

  // fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json()
        .then(data => setProducts(data)))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main>
      <div className="flex-col gap-1 md:flex md:flex-row min-h-sreen">
        <div className="bg-slate-200 flex-1 p-3 my-2">

          {/* search fieldset section */}
          <fieldset className="fieldset border rounded border-slate-400 py-3">
            <legend className="filedset-legend px-3 font-semibold">Search</legend>
            <div className="">
              <input type="text" className="appearance-none focus:outline-none border border-slate-400 px-2 py-1 rounded" placeholder="Product name" />
              <button className="mx-2 border border-slate-400 px-2 py-1 rounded cursor-pointer">save</button>
            </div>
          </fieldset>
          {/* color filters fieldset section */}
          <fieldset className="fieldset border rounded border-slate-400 my-3">
            <legend className="filedset-legend px-3 font-semibold">Color Filters</legend>
            <div className="flex-col gap-4 md:flex md:flex-row p-3">
              <label>
                <input type="radio"
                  name="color"
                  className="w-4 h-4 ml-2 accent-blue-600"
                />
                <span> Blue</span>
              </label>
              <label>
                <input type="radio"
                  name="color"
                  className="w-4 h-4 ml-2 accent-red-600"
                />
                <span> Red</span>
              </label>
              <label>
                <input type="radio"
                  name="color"
                  className="w-4 h-4 ml-2 accent-green-600"
                />
                <span> Green</span>
              </label>
            </div>
          </fieldset>
          {/* Size filters fieldset section */}
          <fieldset className="fieldset border rounded border-slate-400 my-3">
            <legend className="filedset-legend px-3 font-semibold">Size Filters</legend>
            <div className="flex-col gap-4 md:flex md:flex-row p-3">
              <label>
                <input type="radio"
                  name="size"
                  className="w-4 h-4 ml-2 accent-green-600" />
                <span> S <small>(small)</small></span>
              </label>
              <label>
                <input type="radio"
                  name="size"
                  className="w-4 h-4 ml-2 accent-green-600"

                />
                <span> M <small>(medium)</small></span>
              </label>
              <label>
                <input type="radio"
                  name="size"
                  className="w-4 h-4 ml-2 accent-green-600" />
                <span> L <small>(large)</small></span>
              </label>
            </div>
          </fieldset>
          {/* price filters fieldset section */}
          <fieldset className="fieldset border rounded border-slate-400 my-3">
            <legend className="filedset-legend px-3 font-semibold">Price Filters - $</legend>
            <div className="flex-col gap-3 md:flex md:flex-row p-3">
              <label>
                <input type="radio"
                  name="price"

                  className="w-4 h-4 ml-2 accent-green-600" />
                <span> 10 - 20</span>
              </label>
              <label>
                <input type="radio"
                  name="price"
                  className="w-4 h-4 ml-2 accent-green-600"
                />
                <span> 20 - 30</span>
              </label>
              <label>
                <input type="radio"
                  name="price"
                  className="w-4 h-4 ml-2 accent-green-600" />
                <span> 30 - 40</span>
              </label>
            </div>
          </fieldset>
          {/* Products brand section */}
          <fieldset className="fieldset border rounded border-slate-400 my-3">
            <legend className="filedset-legend px-3 font-semibold">Brand Filters </legend>
            <div className="flex-col gap-4 md:flex md:flex-row p-3">
              <label>
                <input type="radio"
                  name="brand"
                  className="w-4 h-4 ml-2 accent-green-600" />
                <span> Nike</span>
              </label>
              <label>
                <input type="radio"
                  name="brand"
                  className="w-4 h-4 ml-2 accent-green-600"
                />
                <span> Adidas</span>
              </label>
              <label>
                <input type="radio"
                  name="brand"
                  className="w-4 h-4 ml-2 accent-green-600" />
                <span> Puma</span>
              </label>
            </div>
          </fieldset>
          {/* Total found filter products */}
          <div className="bg-slate-400 flex-3 p-3 my-2">
            <h2 className="text-lg md:text-xl font-semibold">Total Found Products</h2>
            <ul className="text-center mt-2">
              <li>Nike Product - 30</li>
              <li>Adidas Product - 90</li>
              <li>Puma Product - 30</li>
            </ul>
            <h3 className="mt-2 font-semibold border-t border-slate-200">Total Products - 150</h3>
          </div>
        </div>
        {/* Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 flex-3 p-3 my-2 ">

          {/* card 1 */}
          {products.map((product) => (

            <div className="bg-slate-300 p-3 h-70 rounded shadow-md shadow-sky-200">
              <Link to={"/products/" + product.id} key={product.id}>
                <img
                  className="w-full h-[60%] object-contain rounded cursor-pointer hover:scale-105 transition-all duration-300"
                  src={product.image} alt="" />
              </Link>
              <h2 className="mt-2 font-semibold">{product.title.slice(0, 20)}</h2>

              <p className="mt-2 font-semibold">$ {product.price}</p>
              <button onClick={addToCart} className="w-1/2 bg-green-900 text-white px-3 py-1 my-2 rounded-full text-sm cursor-pointer hover:bg-green-900 hover:text-slate-300 hover:scale-102 transition-all duration-300">Add to Cart</button>

            </div>
          ))}


        </div>

      </div>


    </main>
  )
}

export default ProductList;