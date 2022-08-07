import React, { useState } from 'react';
import '../../App.css';
import { Button } from '../Button';
import './Team.css';
import '../signup/SignUp.css'
import db from '../../firebase/firebase';
import firebase from 'firebase/compat/app'

export default function Team() {
    const [input, setInput] = useState("");
    const inputHandler = (e) => {
      setInput(e.target.value);
    };
  
    const [select, setSelect] = useState("Team Member");
    const selectHandler = (e) => {
      setSelect(e.target.value);
    };
  
    const [msg, setMsg] = useState("");
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (input){
        //add to firebase
        db.collection("teams").add({
          email: input,
          type: select,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setMsg("Thank you for contacting us! We will get back to you shortly");
        setTimeout(() => {
          setMsg("");
        }, 5000);
      }
    }
  return (
    <>
      <div className='team-container'>
        <h1>How do I join Fitless?</h1>
        <p>
        Fitless is currently in development and all help is accepted and needed! 
        </p>
        <p>
        Please do not hesitate to contact us for any inquiries!
        </p>
        <div className='team-btns'>
        <Button
            className='btns'
            buttonStyle='btn--primary--rev'
            buttonSize='btn--large'
        >
            PRE-REGISTER
        </Button>
        </div>
        <div className='input-areas' style={{marginTop:'50px'}}>
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
                <option defaultValue value="user">Team Member</option>
                <option value="Trainer">Investor</option>
                <option value="Fitness Center">Other</option>
                </select>
                <button className='sign-up-btn--primary--rev' type='submit'>Sign Up</button>
            </form>
            {msg && <p className='sign-up-subscription-text'>
                {msg}
            </p>}
        </div>
      </div>
    </>
  );
}