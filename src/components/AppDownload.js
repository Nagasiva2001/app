// src/components/AppDownload.js

import React from 'react';
import './AppDownload.css'; // Optional: for custom styles

const AppDownload = () => {
  return (
    <div className="app-download-container">
      <h1>Download Friends711 Mobile App</h1>
      <p>Stay connected with your friends and enjoy exclusive features with the Friends711 mobile app. Download now!</p>
      <div className="download-buttons">
        <a href="https://play.google.com/store/apps/details?id=com.example.friends711" target="_blank" rel="noopener noreferrer" className="btn btn-android">
          <img src="/images/google-play-badge.png" alt="Download on Google Play" />
        </a>
        <a href="https://apps.apple.com/us/app/friends711/id1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-ios">
          <img src="/images/app-store-badge.png" alt="Download on the App Store" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
