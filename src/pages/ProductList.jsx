import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
const ProductList = () => {
  const addToCart = () => {
    toast.success("Product added to cart")
  }
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-slate-400 flex-3 p-3 my-2 ">

          {/* card 1 */}
          <div className="bg-slate-300 p-3 h-70 rounded shadow-md shadow-sky-200">
            <Link to={"/products/1"}>
              <img
                className="w-full h-[60%] object-contain rounded cursor-pointer"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </Link>
            {/* src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" /> */}
            <h2 className="mt-2 font-semibold">Nike Product</h2>
            <p className="mt-2 font-semibold">Price - $10</p>
            <button onClick={addToCart} className="w-1/2 bg-green-900 text-white px-3 py-1 my-2 rounded-full text-sm cursor-pointer hover:bg-green-900 hover:text-slate-300 hover:scale-102 transition-all duration-300">Add to Cart</button>

          </div>
          <div className="bg-slate-300 p-3 h-70 rounded shadow-md shadow-sky-200">
            <Link to={"/products/2"} >
              <img
                className="w-full h-[60%] object-contain rounded cursor-pointer"
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </Link>
            <h2 className="mt-2 font-semibold">Nike Product</h2>
            <p className="mt-2 font-semibold">Price - $10</p>
            <button onClick={addToCart} className="w-1/2 bg-green-900 text-white px-3 py-1 my-2 rounded-full text-sm cursor-pointer hover:bg-green-900 hover:text-slate-300 hover:scale-102 transition-all duration-300">Add to Cart</button>
          </div>
          <div className="bg-slate-300 p-3 h-70 rounded shadow-md shadow-sky-200">
            <Link to={"/products/3"}>
              <img
                className="w-full h-[60%] object-contain rounded cursor-pointer"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </Link>
            <h2 className="mt-2 font-semibold">Nike Product</h2>
            <p className="mt-2 font-semibold">Price - $10</p>
            <button onClick={addToCart} className="w-1/2 bg-green-900 text-white px-3 py-1 my-2 rounded-full text-sm cursor-pointer hover:bg-green-900 hover:text-slate-300 hover:scale-102 transition-all duration-300">Add to Cart</button>
          </div>
          <div className="bg-slate-300 p-3 h-70 rounded shadow-md shadow-sky-200">
            <Link to={"/products/4"}>
              <img
                className="w-full h-[60%] object-contain rounded cursor-pointer"
                src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </Link>
            <h2 className="mt-2 font-semibold">Nike Product</h2>
            <p className="mt-2 font-semibold">Price - $10</p>
            <button onClick={addToCart} className="w-1/2 bg-green-900 text-white px-3 py-1 my-2 rounded-full text-sm cursor-pointer hover:bg-green-900 hover:text-slate-300 hover:scale-102 transition-all duration-300">Add to Cart</button>
          </div>

        </div>
      </div>


    </main>
  )
}

export default ProductList;