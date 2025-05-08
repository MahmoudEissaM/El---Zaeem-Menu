import React from 'react';

const offers = [
  {
    id: 1,
    title: 'Chicken Bomb',
    price: '130 EGP',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80',
    description: 'Single or Double crispy chicken sandwich with cheese.',
  },
  {
    id: 2,
    title: 'صاروخ السعادة 4',
    price: '399 EGP',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    description: '4 sandwiches with fries or coleslaw.',
  },
  {
    id: 3,
    title: 'BAZOOKA Bucket',
    price: '485 EGP',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    description: '9 pieces fried chicken, 3 coleslaw, 3 bread.',
  },
  {
    id: 4,
    title: 'خصم 100 جنيه',
    price: 'Use code: BAZOOKA100',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    description: 'Discount on your first 3 orders via the app.',
  },
];

export default function OffersSection() {
  return (
    <section className="w-full bg-black py-8">
      {/* Main Banner */}
      <div className="flex justify-center mb-8">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
          alt="Main Offer"
          className="rounded-lg shadow-lg w-full max-w-4xl object-cover"
          style={{ maxHeight: 320 }}
        />
      </div>
      {/* Offers Grid */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Best Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-yellow-400 font-bold text-lg mb-2">{offer.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{offer.description}</p>
                <span className="text-yellow-400 font-bold text-xl">{offer.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
