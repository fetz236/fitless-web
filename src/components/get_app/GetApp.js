import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './GetApp.css';

export default function GetApp() {
  return (
    <>
      <div className='get-app-container'>
          <h1>How do I download the app?</h1>
          <p>
          Currently, our app is under development, but we are accepting users to receive updates on Fitless and our journey through
          our newsletter which will also contain early access to the app for users signed up.
          </p>
          <div className='get-app-btns'>
            <Button
              className='btns'
              buttonStyle='btn--primary--rev'
              buttonSize='btn--large'
            >
              PRE-REGISTER
            </Button>
          </div>
      </div>
    </>
  );
}