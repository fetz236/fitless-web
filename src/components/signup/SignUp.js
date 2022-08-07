import React, { useState } from 'react';
import '../../App.css';
import './SignUp.css'
import db from '../../firebase/firebase';
import firebase from 'firebase/compat/app'

export default function SignUp() {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const [select, setSelect] = useState("User");
  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (input){
      //add to firebase
      db.collection("emails").add({
        email: input,
        type: select,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setMsg("Thank you for registering!");
      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  }
  return (
    <div className='sign-up-container'>
      <section className='sign-up-subscription'>
        <p className='sign-up-subscription-heading'>
          Pre-register for our app!
        </p>
        <p className='sign-up-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={submitHandler}>
            <input
              className='sign-up-input'
              name='email'
              type='email'
              placeholder='Your Email'
              onChange={inputHandler}
            />
            <select 
              className="sign-up-drop-down"
              onChange={selectHandler}
              >
              <option defaultValue value="user">User</option>
              <option value="Trainer">Trainer</option>
              <option value="Fitness Center">Fitness Center</option>
            </select>
            <button className='sign-up-btn--primary--rev' type='submit'>Sign Up</button>
          </form>
          {msg && <p className='sign-up-subscription-text'>
            {msg}
          </p>}
        </div>
      </section>
    </div>
  );
}