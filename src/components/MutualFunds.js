// src/components/MutualFundsForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './Mutual.css';

const MutualFunds = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    investmentAmount: '',
    riskTolerance: '',
    investmentGoal: ''
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
      <h2>Mutual Funds Application</h2>
      <form className="funds-form" onSubmit={handleSubmit}>
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
          <label htmlFor="investmentAmount">Investment Amount:</label>
          <input
            type="number"
            id="investmentAmount"
            name="investmentAmount"
            value={formData.investmentAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="riskTolerance">Risk Tolerance:</label>
          <select
            id="riskTolerance"
            name="riskTolerance"
            value={formData.riskTolerance}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="investmentGoal">Investment Goal:</label>
          <input
            type="text"
            id="investmentGoal"
            name="investmentGoal"
            value={formData.investmentGoal}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn">Submit Application</button>
      </form>
    </div>
  );
};

export default MutualFunds;
