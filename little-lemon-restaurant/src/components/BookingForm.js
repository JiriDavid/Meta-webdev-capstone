import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/BookingForm.css"
import { Button } from 'react-bootstrap';

const BookingForm = ({ availableTimes, dispatch}) => {
  const [occasion, setOccasion] = useState('');
  const [selectedTime, setSelectedTime] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [place, setPlace] = useState("");
  const [instructs, setInstructs] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
    // If the form is not valid, handle the error or display a message
    console.error("Form is not valid");
    return;
  }
  }
  const enableButton = () => {
    if(!(occasion == '') && !(selectedTime == '') && !(date == '') && !(guests == '') && !(place == '') && !(isTermsChecked == false)){
      setDisabledButton(false);
    }
  }

  const handleChange = (e) => {
    setDate(e.target.value);
    let selectedDate = e.target.value;
    const dayOfWeek = new Date(selectedDate).getDay();
    let actionType = '';

    switch (dayOfWeek) {
      case 6: // Saturday
        actionType = 'SATURDAY';
        break;
      case 0: // Sunday
        actionType = 'SUNDAY';
        break;
      default:
        actionType = 'WEEKDAY';
    }

    dispatch({ type: actionType });
  }
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  }
  const handleTermsCheck = () =>{
    setIsTermsChecked(!isTermsChecked);
    enableButton();
  }

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit} className='booking-form'>
          <fieldset>
            <div>
              <label htmlFor="select-occasion">Select Occasion</label>
              <select value={occasion} id='occasion' onChange={(e) => setOccasion(e.target.value)} key={occasion} required>
                <option value="">Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='select-date'>Select date</label>
              <input value={date} onChange={handleChange} type='date' required/>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='selected-time'>Select Time<span className='star'>*</span></label>
              <select id="res-time" value={selectedTime} onChange={handleTimeChange} required>
                {availableTimes && availableTimes.map(
                  (time,index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  )
                )}
              </select>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='no-of-guests'>No of Dinners<span className='star'>*</span></label>
              <input type='number' id="no-of-dinners" min="1" value={guests} onChange={(e) => setGuests(e.target.value) } required />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor='selected-place'>Select Place<span className='star'>*</span></label>
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
              <input type='checkbox' checked={isTermsChecked}  onChange={handleTermsCheck}/>
              <label htmlFor='terms-check'>I agree with the Terms and Conditions, and Privacy policy </label>
            </div>
          </fieldset>
          <fieldset className='bottom-buttons'>
            <div>
              <Link to="/checkout"><button type='submit' disabled= {disabledButton}>Submit</button> </Link>
            </div>
            <div className='btnReceive'>
              <Link to="/booking"><button type='button' >Submit</button></Link>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  )
}

export default BookingForm;