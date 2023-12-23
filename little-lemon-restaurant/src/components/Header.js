import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import restaurantfood from '../restaurantfood.jpg';
import { Button } from "react-bootstrap";

const imageStyles = {
  width: '200px',
  height: '250px',

}

const Header = () =>{
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat asperiores dolores obcaecati nisi similique eum</p>
          <Button variant="primary">Reserve a table</Button>
        </div>
        <div className="col">
          <img src={restaurantfood} alt="restaurant food" style={imageStyles} />
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;