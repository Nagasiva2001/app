// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage';
import SavingsInfo from './components/SavingsInfo';
import ActivateCustomerPage from './components/ActivateCustomerPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import PersonalLoan from './components/PersonalLoan';
import MutualFunds from './components/MutualFunds';
import AppDownload from './components/AppDownload';
import HomeLoan from './components/HomeLoan';
import CreditCard from './components/CreditCard';
import FixedDeposit from './components/FixedDeposit';
import SignIn from './pages/SignIn';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="SavingsInfo" element={<SavingsInfo />} />
        <Route path="/activate-customer" element={<ActivateCustomerPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/PersonalLoan" element={<PersonalLoan />} />
        <Route path="/MutualFunds" element={<MutualFunds />} />
        <Route path="/AppDownload" element={<AppDownload />} />
        <Route path="/HomeLoan" element={<HomeLoan />} />
        <Route path="/CreditCard" element={<CreditCard />} />
        <Route path="/FixedDeposit" element={<FixedDeposit />} />
        <Route path="/signin" element={<SignIn />} />
        


      </Routes>
    </Router>
  );
}

export default App;
