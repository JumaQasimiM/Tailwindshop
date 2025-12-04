import React from "react";
import OfferCard from "./OfferCard";

// =========== images
import heroImg from "../assets/hero-img.jpg";
import hero from "../assets/hero.jpg";
import about from "../assets/about.jpg";
//  =============== data
const offers = [
  {
    id: 1,
    title: "Flat 50% Off on Shoes",
    image: heroImg,
    discount: "50% OFF",
    cta: "Shop Now",
  },
  {
    id: 2,
    title: "BOGO on T-Shirts",
    image: hero,
    discount: "Buy 1 Get 1 Free",
    cta: "Grab Deal",
  },
  {
    id: 3,
    title: "30% Off on Electronics",
    image: about,
    discount: "30% OFF",
    cta: "Explore Now",
  },
  {
    id: 4,
    title: "20% Cashback on Accessories",
    image: heroImg,
    discount: "20% Cashback",
    cta: "View Offer",
  },
];

const OfferSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-10 px-4 md:px-20">
      <h2 className="text-xl md:text-2xl font-extrabold text-center text-gray-800 mb-12">
        🎁 Special <span className="text-sky-600">Offers</span> Just For You
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            image={offer.image}
            title={offer.title}
            discount={offer.discount}
            cta={offer.cta}
          />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
