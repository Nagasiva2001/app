import React, { useState } from 'react';
import axios from 'axios';
import './HomeLoan.css';

const HomeLoan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanAmount: '',
    income: '',
    age: '',
  });

  const [eligibility, setEligibility] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit form data to the server
    try {
      const response = await axios.post('/api/home-loan-application', formData);
      console.log('Application submitted:', response.data);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  const calculateEligibility = () => {
    const { income, age, loanAmount } = formData;
    // Simplified eligibility calculation logic
    const maxLoan = income * 60; // e.g., max loan amount is 60 times monthly income
    if (age >= 21 && age <= 60 && loanAmount <= maxLoan) {
      setEligibility('Eligible');
    } else {
      setEligibility('Not Eligible');
    }
  };

  return (
    <div className="home-loan">
      <h1>Home Loan Application</h1>
      <form onSubmit={handleSubmit} className="loan-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="income">Monthly Income:</label>
          <input type="number" id="income" name="income" value={formData.income} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">Apply</button>
      </form>

      <h2>Eligibility Calculator</h2>
      <button onClick={calculateEligibility} className="btn">Check Eligibility</button>
      {eligibility && <p>{eligibility}</p>}
    </div>
  );
};

export default HomeLoan;
