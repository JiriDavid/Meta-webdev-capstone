import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkout } from './Checkout';
import {Navigate } from "react-router-dom";
import "../assets/styles/BookingForm.css"

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [place, setPlace] = useState("");
  const [instructs, setInstructs] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }
  const [goToCheckout, setGoToCheckout] = useState(false)

  if(goToCheckout){
    return(
      <Navigate to="./checkout" />
    )
  }

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit} className='booking-form'>
          <fieldset>
            <div>
              <label htmlFor="select-occasion">Select Occasion</label>
              <select value={occasion} id='occasion' onChange={(e) => setOccasion(e.target.value)} key={occasion}>
                <option value="">Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='selected-time'>Select Time</label>
              <input
                type="radio"
                value="lunch"
                checked={selectedTime === 'lunch'}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <span>Lunch</span>
              <input
                type="radio"
                value="dinner"
                checked={selectedTime === 'dinner'}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
              <span>Dinner</span>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='select-date'>Select date</label>
              <input value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='no-of-guests'>No of Dinners</label>
              <input type='number' id="no-of-dinners" min="1" value={guests} onChange={(e) => setGuests(e.target.value) }/>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='selected-place'>Select Place</label>
              <input
                type="radio"
                value="outside"
                checked={place === 'outside'}
                onChange={(e) => {setPlace(e.target.value)}}
              />
              <span className='place-button-spans'>Outside</span>
              <input
                type="radio"
                value="inside"
                checked={place === 'inside'}
                onChange={(e) => setPlace(e.target.value)}
              />
              <span className='place-button-spans'>Inside</span>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='special-instructs'>Special Instructions</label>
              <textarea id="sp-instructs" value={instructs} onChange={(e) => setInstructs(e.target.value) } rows={4} cols={26}/>
            </div>
          </fieldset>
          <fieldset>
            <div className='terms'>
              <input type='checkbox' checked={isTermsChecked}  onChange={(e) => setIsTermsChecked(!isTermsChecked) }/>
              <label htmlFor='terms-check'>I agree with the Terms and Conditions, and Privacy policy </label>
            </div>
          </fieldset>
          <fieldset>
            <div className='btnReceive'>
              <Link to="/checkout"><input type='submit' value={"Submit"} aria-label='On Click'/></Link>
            </div>
            <div className='btnReceive'>
              <Link to="/booking"><input type='button' value={"Cancel"} aria-label='On Click'/></Link>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  )
}

export default BookingForm