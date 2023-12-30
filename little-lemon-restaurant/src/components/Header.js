import React, { useState } from "react"
import restaurantfood from '../restaurantfood.jpg';
import {Navigate } from "react-router-dom";

const Header = () =>{
  const [goToBookingPage, setGoToBookingPage] = useState(false)

  if(goToBookingPage){
    return(
      <Navigate to="./booking" />
    )
  }
  return (
    <header className="header">
        <div>
          <section>
            <div className="banner">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat asperiores dolores obcaecati nisi similique eum</p>
              <button aria-label="On Click" onClick={() => setGoToBookingPage(true)}>Reserve a table</button>
            </div>
            <div className="banner-img">
             <img src={restaurantfood} alt="restaurant food" />
            </div>
          </section>
        </div>
    </header>
  );
}

export default Header;