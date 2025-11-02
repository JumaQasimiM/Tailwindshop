import React from "react";
import aboutImage from "../assets/about.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaClock,
} from "../component/icons/index.js";
export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-5 sm:flex-col md:flex-row gap-4 md:my-10">
        <div className="flex p-1 md:w-2/5 flex justify-center items-center ">
          <img
            src={aboutImage}
            alt="aboutImage"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full px-4 text-left md:w-3/5">
          <h2 className="text-2xl font-bold mb-2 ">Shop. </h2>
          <p className="text-gray-600 font-semibold">
            Welcome to our online clothing shop, your go-to destination for
            stylish and affordable fashion for both men and women. We offer a
            wide range of high-quality clothing, from casual wear to trendy
            outfits perfect for any occasion. Whether you're looking for
            everyday basics or standout pieces to elevate your wardrobe, our
            carefully curated collection has something for everyone. Shop with
            confidence and enjoy easy browsing, secure checkout, and fast
            shipping—all designed to make your online shopping experience smooth
            and satisfying. Fashion made simple, right at your fingertips.
          </p>
          <div className="my-4 text-left text-gray-700 tracking-wide leading-10">
            <h3 className="text-xl font-bold "> Why Shop With Us?</h3>

            <ul>
              <li className="style-none">
                👕{" "}
                <span className="font-semibold">
                  Stylish Clothing for Men & Women
                </span>{" "}
                – From everyday basics to trendy pieces, we’ve got looks you’ll
                love.
              </li>

              <li>
                {" "}
                🛍️ <span className="font-semibold">Wide Selection</span> –
                Casual, formal, streetwear, and more – all in one place.
              </li>

              <li>
                💎{" "}
                <span className="font-semibold">
                  High Quality, Affordable Prices
                </span>{" "}
                – Look great without breaking the bank.
              </li>

              <li>
                {" "}
                ⚡{" "}
                <span className="font-semibold">
                  Fast & Reliable Shipping
                </span>{" "}
                – Get your favorite outfits delivered quickly to your door.
              </li>

              <li>
                🔒 <span className="font-semibold">Secure Online Shopping</span>{" "}
                – Safe payments and privacy protection, always.
              </li>

              <li>
                🌍{" "}
                <span className="font-semibold">Shop Anytime, Anywhere </span>–
                24/7 access to fashion from the comfort of your home.
              </li>

              <li>
                ❤️
                <span className="font-semibold">
                  {" "}
                  Customer Satisfaction First
                </span>{" "}
                – We’re here to help with friendly support and easy returns.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* contact section */}
      <section className="bg-white py-12 px-4 md:px-6 lg:px-7 xl:px-20 2xl:px-30 text-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            📞 Get in Touch
          </h2>
          <p className="text-gray-600 mb-8 font-semibold">
            We’re here to help with any questions, feedback, or support you
            need. Whether you're looking for style advice or help with an order,
            our team is ready to assist you. 🖤
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex space-x-2 items-center">
              <FaEnvelope /> <strong>Email: </strong>{" "}
              <a
                href="mailto:support@shoping.com"
                className="text-blue-600 hover:underline"
              >
                support@shop.com
              </a>
            </p>
            <p className="flex space-x-2 items-center">
              {" "}
              <FaPhone /> <strong>WhatsApp / Phone: </strong>{" "}
              <a
                href="tel:+49152123423"
                className="text-blue-600 hover:underline"
              >
                +49152123423
              </a>
            </p>
            <p className="flex space-x-2 items-center">
              <FaLocationDot /> <strong>Address: </strong> Shoping, Heilbronn,
              Germany
            </p>
            <p className="flex space-x-2 items-center">
              {" "}
              <FaClock /> <strong>Business Hours: </strong> Saturday – Thursday
              | 9:00 AM – 6:00 PM
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800 mb-4">
              📲 Follow & Connect With Us
            </h3>
            <p className="text-gray-600 mb-4">
              Stay in the loop with the latest styles, offers, and updates!
              Connect with us on social media:
            </p>

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
                className="flex  items-center"
              >
                <FaFacebook className="mx-2 text-blue-600" /> Facebook
              </a>
              <a
                href="https://tiktok.com/"
                target="_blank"
                className="flex  items-center"
              >
                <FaTiktok className="mx-2" /> TikTok
              </a>
            </div>

            <p className="text-gray-600 mt-4">
              💬 Feel free to DM us — we usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
