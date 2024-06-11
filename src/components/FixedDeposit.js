import React from 'react';
import './FixedDeposit.css';

const offers = [
  {
    title: 'High-Interest Rates',
    description: 'Earn up to 7.5% interest on fixed deposits with flexible tenures.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-r31oRvm1vWVHVvx257NMX9S03gUT1XZsA&s'
  },
  {
    title: 'Tax Saving FD',
    description: 'Save on taxes under Section 80C with our Tax Saving Fixed Deposit.',
    image: 'https://m.economictimes.com/thumb/msid-81926103,width-240,height-180,imgsize-/wealth/tax/tds-on-cumulative-fds-your-money-loss-is-more-than-the-tax-deducted.jpg'
  },
  {
    title: 'Senior Citizen Benefits',
    description: 'Senior citizens get an additional 0.5% interest rate on fixed deposits.',
    image: 'https://i.wlycdn.com/Insights/Ins-5marc23-Senior-Citizen-FD.png'
  },
  {
    title: 'Easy Liquidity',
    description: 'Avail easy premature withdrawal and loan against FD options.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUrVfnFDqWyZzlgNcv1i9_VsE7Fh4k7l1jg&s'
  }
];

const FixedDeposit = () => {
  return (
    <div className="fixed-deposit">
      <h1>Fixed Deposit</h1>
      <div className="offers-list">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index}>
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="offer-content">
              <h2>{offer.title}</h2>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedDeposit;
