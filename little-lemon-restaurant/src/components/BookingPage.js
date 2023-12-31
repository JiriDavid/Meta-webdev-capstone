import Nav from './Nav'
import BookingForm from './BookingForm'
import Header2 from './Header2'
import Footer from './Footer'
import React,{useReducer} from 'react'
 const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  const timesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(action.payload);
      default:
        return state;
    }
  };

  // Function to update times based on date
const updateTimes = (selectedDate) => {
  const dayOfWeek = new Date(selectedDate).getDay();

  // Default to all times
  let updatedTimes = initializeTimes();

  // Adjust times based on the day of the week
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Weekdays (Monday to Friday)
    updatedTimes = ["17:00", "18:00", "19:00"];
  } else if (dayOfWeek === 6) {
    // Saturday
    updatedTimes = ["17:00", "18:00", "19:00", "20:00"];
  }

  return updatedTimes;
};

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };
  return (
    <>
      <Nav />
      <Header2 />
      <BookingForm onDateChange = {handleDateChange}  availableTimes = {availableTimes}/>
      <Footer />
    </>
  )
}

export default BookingPage