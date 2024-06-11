import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* About Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>About Us</h4>
          <p style={styles.text}>We are committed to providing secure and reliable banking services. Our mission is to empower you with the financial tools you need to succeed.</p>
        </div>
        
        {/* Quick Links Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Quick Links</h4>
          <ul style={styles.list}>
            <li><a href="/home" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
            <li><a href="/faq" style={styles.link}>FAQ</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Contact Us</h4>
          <p style={styles.text}>1234 Bank St., FinCity, Country</p>
          <p style={styles.text}>Email: <a href="friendsbank:support@ebank.com" style={styles.link}>friendsbank:support@ebank.com</a></p>
          <p style={styles.text}>Phone: <a href="tel:+916303172229" style={styles.link}>+916303172229</a></p>
        </div>
        
        {/* Social Media Section */}
        <div style={styles.section}>
          <h4 style={styles.heading}>Follow Us</h4>
          <p>
            <a href="https://facebook.com" style={{...styles.socialLink, marginRight: 10}}>Facebook</a>
            <a href="https://twitter.com" style={{...styles.socialLink, marginRight: 10}}>Twitter</a>
            <a href="https://instagram.com" style={styles.socialLink}>Instagram</a>
          </p>
        </div>

      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#2C3E50',
    color: '#ECF0F1',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  section: {
    flex: 1,
    minWidth: '200px',
    marginBottom: '20px',
  },
  heading: {
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'none',
    padding: 9,
    fontSize: '14px',
    lineHeight: '1.6',
  },
  link: {
    color: '#ECF0F1',
    textDecoration: 'none',
  },
  socialLink: {
    color: '#ECF0F1',
    textDecoration: 'none',
  }
};

export default Footer;
