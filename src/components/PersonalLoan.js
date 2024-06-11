// src/components/PersonalLoan.js

import React, { useState } from 'react';
import axios from 'axios';
import './Personal.css';

const PersonalLoan = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    loanAmount: '',
    loanTerm: '',
    income: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/apply', formData);
      console.log('Application submitted successfully:', response.data);
      // Handle success (e.g., display a success message or navigate to another page)
    } catch (error) {
      console.error('Application submission failed:', error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div className="form-container">
      <h2>Personal Loan Application</h2>
      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years):</label>
          <input
            type="number"
            id="loanTerm"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="income">Annual Income:</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Submit Application</button>
      </form>
    </div>
  );
};

export default PersonalLoan;
