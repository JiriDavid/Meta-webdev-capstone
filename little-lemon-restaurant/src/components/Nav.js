import { useState } from 'react';
import Logo from '../assets/images/Logo.svg';
import hambeger from '../assets/images/hambegger_icon.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <a href='/' className='logo'>
          <img src={Logo} alt='logo' />
        </a>

        <div className='menu-icon' onClick={toggleMenu}>
          <img src={hambeger} alt='hamburger icon' />
        </div>

        <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/'>ABOUT</Link>
          </li>
          <li>
            <Link to='/'>MENU</Link>
          </li>
          <li>
            <Link to='/'>RESERVATIONS</Link>
          </li>
          <li>
            <Link to='/'>ORDER ONLINE</Link>
          </li>
          <li>
            <Link to='/'>LOGIN</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
