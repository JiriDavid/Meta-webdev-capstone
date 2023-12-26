import Logo from '../assets/Logo.svg';


const navStyles = {
  display: "flex"
}
const ulStyles = {
  display: "inline-flex"
}
const imageStyles = {

}
const Nav = () => {
  return(
    <nav style={navStyles}>
      <img src= {Logo} alt='logo'/ >
      <ul style={ulStyles}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>MENU</li>
        <li>RESERVATIONS</li>
        <li>ORDER ONLINE</li>
        <li>LOGIN</li>
      </ul>
    </nav>
  )
}

export default Nav;