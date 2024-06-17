import React from 'react';
import './SavingsInfo.css';

const savingsDetails = [
  {
    title: 'High Interest Rates',
    description: 'Our savings accounts offer competitive interest rates to help your money grow faster.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTD83gSNN2F3UuuwXjwORuHLvnAreRgKPSA&s',
    alt: 'High Interest Rates'
  },
  {
    title: 'Easy Online Access',
    description: 'Manage your savings account from anywhere with our user-friendly e-banking platform.',
    image: 'https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/SavingsAC_66_A-guide-to-Savings-account-benefits-types-advantages-_-disadvantages-and-more-800x500.png',
    alt: 'Easy Online Access'
  },
  {
    title: 'Secure Transactions',
    description: 'Your security is our priority. Experience safe and secure online banking with XYZ Bank.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIw1wsjsP6WBYVpiSV2lhfSIkIM0pboWF6w&s',
    alt: 'Secure Transactions'
  },
  {
    title: '24/7 Customer Support',
    description: 'Our dedicated customer support team is here to assist you at any time, day or night.',
    image: 'https://wp-asset.groww.in/wp-content/uploads/2019/02/11094409/bestsavingbankaccountsyoucanconsideropeningin2019-01-scaled.jpg',
    alt: 'Customer Support'
  }
];

const SavingsInfo = () => {
  return (
    <section className="savings-info">
      <h2>Why Open a Savings Account with Us?</h2>
      <div className="info-container">
        {savingsDetails.map((detail, index) => (
          <div className="info-section" key={index}>
            <img src={detail.image} alt={detail.alt} className="info-image" />
            <div className="info-content">
              <h3>{detail.title}</h3>
              <p>{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavingsInfo;
