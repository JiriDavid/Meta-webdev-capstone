import React from "react";
import Logo from '../assets/Logo.svg';

const Footer = () => {
  return(
    <>
    <img src={Logo} alt="logo" />
    <h3>Dormant Navigation</h3>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Restaurants</li>
      <li>Order Online</li>
      <li>Login</li>
    </ul>
    <h3>Contact</h3>
    <ul>
      <li>Address</li>
      <li>Phone Number</li>
      <li>Email</li>
    </ul>
    <h3>Social-Media Links</h3>
    <ul>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>Twitter</li>
    </ul>
    </>
  )
}
export default Footer;