import React, { useReducer, useState } from 'react';
import Nav from './Nav';
import Header2 from './Header2';
import Footer from './Footer';
import BookingForm from './BookingForm';

const updatedTimes = (state, action) => {
  switch (action.type) {
    case 'SATURDAY':
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    case 'SUNDAY':
      return ['19:00', '20:00'];
    case 'WEEKDAY':
      return ['18:00', '19:00', '20:00', '21:00', '22:00'];
    default: 
      return state;
  }
};

const initializeTimes = ['18:00', '19:00', '20:00', '21:00'];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updatedTimes, initializeTimes);


  return (
    <>
      <Nav />
      <Header2 />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </>
  );
};

export default BookingPage;