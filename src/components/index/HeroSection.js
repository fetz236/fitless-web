import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Fitless</h1>
      <p>Revolutionising Fitness</p>
      <div className='hero-btns'>
        <Button
          link_to='/get-app'
          className='btns'
          buttonStyle='btn--primary--rev'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;