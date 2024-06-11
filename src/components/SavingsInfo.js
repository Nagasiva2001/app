import React from 'react';
import './SavingsInfo.css';

const SavingsInfo = () => {
    return (
        <section className="savings-info">
            <h2>Why Open a Savings Account with Us?</h2>
            <div className="info-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmTD83gSNN2F3UuuwXjwORuHLvnAreRgKPSA&s" alt="High Interest Rates" />
                <div>
                    <h3>High Interest Rates</h3>
                    <p>Our savings accounts offer competitive interest rates to help your money grow faster.</p>
                </div>
            </div>
            <div className="info-section">
                <img src="https://paytmblogcdn.paytm.com/wp-content/uploads/2021/07/SavingsAC_66_A-guide-to-Savings-account-benefits-types-advantages-_-disadvantages-and-more-800x500.png" alt="Easy Online Access" />
                <div>
                    <h3>Easy Online Access</h3>
                    <p>Manage your savings account from anywhere with our user-friendly e-banking platform.</p>
                </div>
            </div>
            <div className="info-section">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRIw1wsjsP6WBYVpiSV2lhfSIkIM0pboWF6w&s" alt="Secure Transactions" />
                <div>
                    <h3>Secure Transactions</h3>
                    <p>Your security is our priority. Experience safe and secure online banking with XYZ Bank.</p>
                </div>
            </div>
            <div className="info-section">
                <img src="https://wp-asset.groww.in/wp-content/uploads/2019/02/11094409/bestsavingbankaccountsyoucanconsideropeningin2019-01-scaled.jpg" alt="Customer Support" />
                <div>
                    <h3>24/7 Customer Support</h3>
                    <p>Our dedicated customer support team is here to assist you at any time, day or night.</p>
                </div>
            </div>
        </section>
    );
};

export default SavingsInfo;
