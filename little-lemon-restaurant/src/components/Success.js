import React from 'react'
import Nav from './Nav'
import Header2 from './Header2'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import SuccessImg from '../assets/images/success-image.png'
import '../assets/styles/Success.css'

const Success = () => {
  return (
    <>
      <Nav />
      <Header2 />
      <div className='success-container' >
        <p className='success-heading'>Congratulations you have successfully reserved a table!</p>
        <img src={SuccessImg} alt='success image' />
        <div className='btn'>
          <Link to="/"><button type='button'>Back to home</button></Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Success