import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header2 from './Header2';
import Footer from './Footer';
import Nav from './Nav';
import "../assets/styles/Checkout.css"

export const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [creditNo, setCreditNo] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [proceed, setProceed] = useState(false);
  return (
    <>
      <Nav />
      <Header2 />
      <main>
        <section>
          <form>
            <fieldset>
              <label htmlFor='name'>Name</label>
              <input type='text' id="name" value={name} onChange={(e) => {setName(e.target.value)}} required/>
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Email</label>
              <input type='email' id="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
            </fieldset>
            <fieldset>
              <label htmlFor='password'>Password</label>
              <input type='password' value={password} id="password" onChange={(e) => {setPassword(e.target.value)}} required/>
            </fieldset>
            <fieldset>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input type='password' value={confirmPassword} id="confirm_password" onChange={(e) => {setConfirmPassword(e.target.value)}} required/>
            </fieldset>
            <fieldset>
              <div>
                <label htmlFor='credit-card-no'>Credit Card</label>
                <input type='text' id="credit-card-no" value={creditNo} onChange={(e) => {setCreditNo(e.target.value)}} placeholder='credit card number' required/>
              </div>
              <div>
                <input type='date' value={expDate} onChange={(e) => {setExpDate(e.target.value)}} placeholder='exp.date' required />
                <input type='text' value={cvv} onChange={(e) => setCvv(e.target.value)} placeholder='CVV' required />
              </div>
            </fieldset>
            <fieldset>
            <div>
              <input type='checkbox' checked={proceed}  onChange={(e) => setProceed(!proceed) }/>
              <label htmlFor='terms-check'>Are you sure you want to continue</label>
            </div>
          </fieldset>
          <fieldset>
            <div className='btnReceive'>
              <Link to="/success"><input type='submit' value={"Submit"} aria-label='On Click'/></Link>
            </div>
            <div className='btnReceive'>
              <Link to="/booking"><input type='button' value={"Cancel"} aria-label='On Click'/></Link>
            </div>
          </fieldset>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}
