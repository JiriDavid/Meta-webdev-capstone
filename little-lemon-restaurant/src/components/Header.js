import React from "react"
import restaurantfood from '../restaurantfood.jpg';

const imageStyles = {
  width: '200px',
  position: 'relative',

}

const Header = () =>{
  return (
    <header>
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat asperiores dolores obcaecati nisi similique eum</p>
          <button >Reserve a table</button>
        </div>
        <div >
          <img src={restaurantfood} alt="restaurant food" style={imageStyles} />
        </div>
    </header>
  );
}

export default Header;