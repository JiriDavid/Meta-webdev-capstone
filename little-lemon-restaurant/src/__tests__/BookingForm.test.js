import React from 'react';
import { render, screen, act} from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import BookingForm from '../components/BookingForm';
import initializeTimes from '../components/BookingPage'; 
import { updateTimes } from '../components/BookingPage'; 


test('Renders the BookingForm heading', () => {
  const history = createMemoryHistory();
  act(() => {
    render(
      <Router history={history}>
        <BookingForm />
      </Router>
    );
  });
  const headingElement = screen.getByText('Book Now!');
  expect(headingElement).toBeInTheDocument();
});



test('initializeTimes returns the correct initial times', () => {
  const initialTimes = initializeTimes;
  const expectedTimes = [
    "18:00",
    "19:00",
    "20:00",
    "21:00"
  ];
  expect(initialTimes).toEqual(expectedTimes);
}); 

test('updateTimes returns the same value provided in the state', () => {
  const currentState = ["17:00", "18:00", "19:00"];
  const selectedDate = new Date(); 
  const updatedTimes = updateTimes(selectedDate, currentState);
  expect(updatedTimes).toEqual(currentState);
});

test('form time input has the correct value', () => {
  const history = createMemoryHistory();

  act(() => {
    render(
      <Router history={history}>
        <BookingForm availableTimes={initializeTimes()} />
      </Router>
    );
  });

  const timeInput = screen.getByLabelText('Select Time');
  fireEvent.change(timeInput, { target: { value: '19:00' } });
  expect(timeInput.value).toBe('19:00');
});


test('form date input has the correct value', () => {
  const history = createMemoryHistory();

  act(() => {
    render(
      <Router history={history}>
        <BookingForm availableTimes={initializeTimes()} />
      </Router>
    );
  });
  const dateInput = screen.getByLabelText('Select date');
  fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
  expect(dateInput.value).toBe('2023-12-31');
});

test('form occasion input has the correct value', () => {
  const history = createMemoryHistory();
  act(() => {
    render(
      <Router history={history}>
        <BookingForm availableTimes={initializeTimes()} />
      </Router>
    );
  });
  const occasionInput = screen.getByLabelText('Select Occasion');
  fireEvent.change(occasionInput, { target: { value: 'birthday' } });
  expect(occasionInput.value).toBe('birthday');
});
