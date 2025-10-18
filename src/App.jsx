import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
// react tostify
import { ToastContainer, Bounce } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Products from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import './App.css'
import Contact from './pages/Contact'
import MainLayout from './layouts/MainLayout';
import P404 from './pages/404'

function App() {

  return (

    <>
      {/* Notifcation using react tostify  */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<MainLayout />}>
            <Route path="/Tailwindshop" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<P404 />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
