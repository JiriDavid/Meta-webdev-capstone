import { useState } from 'react';
import Logo from '../assets/images/Logo.svg';
import hambeger from '../assets/images/hambegger_icon.svg';
import { Route, Routes, Link } from 'react-router-dom';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState('false');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return(
  
  <>
  <nav className={'navbar ${menuOpen ? "open" : ""}'}>
    <a href='/' className='logo'>
    <img src= {Logo} alt='logo'/>
    </a>

      <div className='menu-icon' onClick={toggleMenu}>
        <img src={hambeger} alt='hambegger icon' />
      </div>

      <ul className='nav-links ${menuOpen ? "visible" : ""}'>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/'>ABOUT</a>
        </li>
        <li>
          <a href='/'>MENU</a>
        </li>
        <li>
          <a href='/'>RESERVATIONS</a>
        </li>
        <li>
          <a href='/'>ORDER ONLINE</a>
        </li>
        <li>
          <a href='/'>LOGIN</a>
        </li>
      </ul>
    </nav>
  </>
  );
}

export default Nav;