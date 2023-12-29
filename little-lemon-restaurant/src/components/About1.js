import React from 'react'
import "../assets/styles/About1.css"
import ChefsImage1 from "../assets/images/chefs1.jpg";
import ChefsImage2 from "../assets/images/chefs2.jpg";

const About1 = () => {
  return (
    <>
      <section className='about1-container'>
        <div className='about1-left'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat asperiores dolores obcaecati nisi similique eum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat asperiores dolores obcaecati nisi similique eum</p>
        </div>
        <div className='about1-images'>
          <div className='about1-img1 image' >
            <img src={ChefsImage1} alt='chefs picture' />
          </div>
          <div className='about1-img2 image' >
            <img src={ChefsImage2} alt='chefs picture' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About1