import './App.css';
import Success from './components/Success';
import { Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import { Checkout } from './components/Checkout';
import BookingPage from './components/BookingPage';


function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='/booking' element={<BookingPage />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
      <Route path='/success' element={<Success />}></Route>
     </Routes>
    </>
  );
}

export default App;
