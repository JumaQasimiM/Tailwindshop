import React from "react";
import { toast } from "react-toastify";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
} from "../component/icons/index.js";
export default function Contact() {
  const handelSubmit = (e) => {
    e.preventDefault();
    toast.info("Message sent successfully");
  };
  return (
    //  Contact Section
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div className="text-left">
          <h2 className="text-xl md:text-4xl font-bold mb-6">
            📞 Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We’d love to hear from you! Whether it’s a question, a suggestion,
            or support with an order — we’re here for you. 🖤
          </p>
          <div className="space-y-4 text-lg">
            <p className="flex space-x-2 items-center">
              <FaEnvelope /> <strong>Email:</strong>{" "}
              <a
                href="mailto:support@yourshop.com"
                className="text-blue-600 hover:underline"
              >
                support@shop.com
              </a>
            </p>
            <p className="flex space-x-2 items-center">
              <FaPhone /> <strong>Phone:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +49 2525 456 7890
              </a>
            </p>
            <p className="flex space-x-2 items-center">
              <FaLocationDot /> <strong>Address:</strong> Shop, Mycity, Germany
            </p>
            <p className="flex space-x-2 items-center">
              <FaClock /> <strong>Hours:</strong> Saturday – Thursday | 9:00 AM
              – 6:00 PM
            </p>
          </div>

          {/*  Social Media */}
          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              📲 Connect With Us
            </h3>
            <div className="flex space-x-6 text-xl">
              <div className="flex space-x-6 text-lg">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className="flex items-center hover:text-pink-600"
                >
                  <FaInstagram className="mx-2 text-red-500" />{" "}
                  <span>Instagram</span>
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  className="flex  items-center hover:text-blue-600"
                >
                  <FaFacebook className="mx-2 text-blue-600" /> Facebook
                </a>
                <a
                  href="https://tiktok.com/"
                  target="_blank"
                  className="flex  items-center hover:text-black"
                >
                  <FaTiktok className="mx-2" /> TikTok
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
          <form className="space-y-5" onSubmit={handelSubmit}>
            <div>
              <label className="block mb-2 font-medium">Your Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Your Message</label>
              <textarea
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
