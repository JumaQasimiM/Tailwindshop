import React from 'react';

const OfferCard = ({ image, title, discount, cta }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sky-800 font-bold text-xl mb-4">{discount}</p>
        <button className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
          {cta}
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
