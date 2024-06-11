// src/components/Services.js
import React from 'react';
import './Services.css';

const services = [
  
  {
    title: 'Secure a Home Loan with 50% OFF on Processing Fee*',
    description: 'Your home loan eligibility determines whether you qualify for borrowing a home loan or not. Your lending bank conducts this mandatory housing loan eligibility check when you apply for a home loan.',
    category: 'Home Loan',
    buttonText: 'Apply Now',
    buttonLink: '/HomeLoan',
    image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2017-08/18/full/1502995406-2851.jpg'
  },
  {
    title: 'Credit Card Services',
    description: 'Enter the cashless and rewarding world of Credit Cards with Kotak Bank! Whether you’re shopping, traveling, or enjoying a movie, our cards come loaded with power-packed features that make cashless payments seamless, convenient, and more rewarding than ever before.',
    category: 'Credit card',
    buttonText: 'Apply Now',
    buttonLink: 'CreditCard',
    image: 'https://navi.com/blog/wp-content/uploads/2022/06/credit-card.jpg'
  },
  {
    title: 'Fixed Deposite',
    description: ' Online Fixed Deposits offer the perfect combination of security, convenience, and high returns. With just a few clicks, you can start growing your savings today!',
    category: 'INVESTMENTS',
    buttonText: 'Know More',
    buttonLink: 'FixedDeposit',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wUvDEx1JSU34HzCjnergn5nbffjM7tUE0A&s'
  },
  {
    title: 'Personal Loan at incredibly low rates',
    description: 'Quick loan sanction | Part Prepayment available | Loan amount up to Rs.40 lakh',
    category: 'LOANS',
    buttonText: 'Apply Now',
    buttonLink: '/PersonalLoan',
    image: '/img2.png'
  },
  {
    title: 'Friends711 Mobile Banking App',
    description: 'Enjoy fast UPI payments, quick FDs and more with Friends711 App',
    category: 'SAVINGS ACCOUNT',
    buttonText: 'Download App',
    buttonLink: 'AppDownload',
    image: '/img3.png'
  },
  {
    title: 'Mutual Funds',
    description: 'Start investing in mutual funds online to grow your wealth along with saving taxes.',
    category: 'INVESTMENTS',
    buttonText: 'Know More',
    buttonLink: 'MutualFunds',
    image: '/img4.png'
  },
  
];

const Services = () => {
  return (
    <div className="services">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.category} className="service-image" />
          <div className="service-content">
            <h3>{service.category}</h3>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href={service.buttonLink} className="service-button">
              {service.buttonText}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
