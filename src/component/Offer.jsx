import React from 'react';
import OfferCard from './OfferCard';

const offers = [
  {
    id: 1,
    title: 'Flat 50% Off on Shoes',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    discount: '50% OFF',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'BOGO on T-Shirts',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    discount: 'Buy 1 Get 1 Free',
    cta: 'Grab Deal',
  },
  {
    id: 3,
    title: '30% Off on Electronics',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    discount: '30% OFF',
    cta: 'Explore Now',
  },
  {
    id: 4,
    title: '20% Cashback on Accessories',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    discount: '20% Cashback',
    cta: 'View Offer',
  },
];

const OfferSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        🎁 Special <span className="text-pink-600">Offers</span> Just For You
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
