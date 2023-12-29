import React from "react";
import Logo from '../assets/images/Logo.svg';
import "../assets/styles/Footer.css"

const Footer = () => {
  return(
    <footer>
      <div className="footer-background">
        <div className="footer-container">
          <div className="footer-left" >
            <img src={Logo} alt="logo" />
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
          </div>
          <div className="footer-content">
            <div className="dormant-nav">
              <h3>Dormant Navigation</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Restaurants</li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
            </div>
            <div className="social-media-links">
              <h3>Social-Media Links</h3>
              <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;