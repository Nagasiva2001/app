// src/components/Offers.js
import React from 'react';
import './Offers.css';

const offers = [
  { title: 'Offer 1', description: 'Description for Offer 1' },
  { title: 'Offer 2', description: 'Description for Offer 2' },
  // Add more offers as needed
];

const Offers = () => {
  return (
    <div className="offers">
      <h2>Special Offers</h2>
      <div className="offer-list">
        {offers.map((offer, index) => (
          <div className="offer" key={index}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
