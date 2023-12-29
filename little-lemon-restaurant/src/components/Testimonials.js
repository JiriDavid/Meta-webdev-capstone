import React from 'react'
import "../assets/styles/Testimonials.css"
import { FaStar } from 'react-icons/fa';
import profile1 from "../assets/images/profile1.jpeg";
import profile2 from "../assets/images/profile2.jpeg";
import profile3 from "../assets/images/profile3.jpeg";
import profile4 from "../assets/images/profile4.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
        image: profile1,
        name: "David Promise",
        review: "review: ",
        
    },
    {
        image: profile2,
        name: "Elen Jiri",
        review: "review: ",
    },
    {
        image: profile3,
        name: "Kudakwashe Jiri",
        review: "review: ",
    },
    {
      image: profile4,
      name: "Kuzivakwashe Jiri",
      review: "review: ",
  }
]

const testimonialItems = testimonials.map(testimony => {
  const image = testimony.image;
  const name = testimony.name;
  const review = testimony.review;
  return (
      <div className='container'>
          <div className="testimony-container">
                  <h5 className='testimony-heading'>Rate</h5>
                  <div className="img-name-container">
                      <img src={image} alt="profile picture" />
                      <div className="name">
                      <h5>{name}</h5>
                      </div>
                  </div>
              <div className="testinony-text">
                  <div className='reviews-container' >
                    <span className='review-txt'>{review}</span>
                    <span>{"4.7"}</span>
                    <FaStar color='#F9D978' />
                    <FaStar color='#F9D978' />
                    <FaStar color='#F9D978' />
                    <FaStar color='#F9D978' />
                    <FaStar color='#F9D978' />
                  </div>
              </div>
          </div>
      </div>
  )
})

  return (
    <>
     <section>
       <div className='testimonials-section'>
        <h3>Testimonials</h3>
        <div className='testimonies'>
          {testimonialItems}
        </div>
       </div>
     </section>
    </>
  )
}

export default Testimonials