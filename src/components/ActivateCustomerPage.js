// src/components/ActivateCustomerPage.js
import React, { useState } from 'react';
import './Page.css';

const ActivateCustomerPage = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle customer activation logic here
    console.log('Account Number:', accountNumber);
    console.log('Password:', password);
  };

  return (
    <div className="bd">

    <div className="page">
      <h1>Activate Customer</h1>
      <p>Please enter your account details to activate your account.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Activate</button>
      </form>
    </div>
    </div>
  );
};

export default ActivateCustomerPage;
