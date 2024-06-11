import React from 'react';
import './CreditCard.css';

const services = [
  {
    title: 'Platinum Credit Card',
    description: 'Enjoy exclusive benefits and rewards with our Platinum Credit Card.',
    image: 'https://icm.aexp-static.com/acquisition/card-art/NUS000000237_480x304_straight_withname.png',
    buttonText: 'Apply Now',
    buttonLink: '/apply/platinum'
  },
  {
    title: 'Gold Credit Card',
    description: 'Get the best offers on dining, shopping, and travel with our Gold Credit Card.',
    image: 'https://c8.alamy.com/comp/DF1M98/gold-credit-card-or-debit-card-representing-rich-or-luxury-with-world-DF1M98.jpg',
    buttonText: 'Apply Now',
    buttonLink: '/apply/gold'
  },
  {
    title: 'Silver Credit Card',
    description: 'Experience the convenience of a Silver Credit Card with lower fees.',
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-d-illustration-of-isolated-silver-credit-card-template-on-a-white-image_13547474.png',
    buttonText: 'Apply Now',
    buttonLink: '/apply/silver'
  }
];

const CreditCard = () => {
  return (
    <div className="credit-card-services">
      <h1>Our Credit Card Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.buttonLink} className="service-button">
                {service.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreditCard;
