import React from 'react'
import Nav from './Nav'
import BookingForm from './BookingForm'
import Header2 from './Header2'
import Footer from './Footer'

const BookingPage = (props) => {
  return (
    <>
      <Nav />
      <Header2 />
      <BookingForm dispatch={props.dispatch} submitForm = {props.submitForm} />
      <Footer />
    </>
  )
}

export default BookingPage