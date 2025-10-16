import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaTiktok } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold text-pink-500">Shop<span className='text-prink-600'>.</span></h2>
            <p className="mt-2 text-sm text-gray-400">
              Your one-stop online shop for fashion, gadgets, and more.
              Your one-stop online shop for fashion, gadgets, and more.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Shop</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2 text-center">
              <Link className="text-gray-400 hover:text-white">
                <FaFacebook className="text-white cursor-pointer hover:scale-120 transition-all duration-300" />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <FaLinkedin className="text-white cursor-pointer hover:scale-120 transition-all duration-300" />
              </Link>
              <Link className="text-gray-400 hover:text-white">
                <FaInstagram className="text-white cursor-pointer hover:scale-120 transition-all duration-300" />
              </Link>
              <Link to="https://github.com/JumaQasimiM" className="text-gray-400 hover:text-white">
                <FaGithub className="text-white cursor-pointer hover:scale-120 transition-all duration-300" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
