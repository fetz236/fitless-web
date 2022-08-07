import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 style={{color:'#800020'}}>What is Fitless' goal?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cards_1.jpg'
              text='What is Fitless?'
              label='Information'
              path='/general'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cards_2.jpg'
              text='How do I join Fitless and its mission of transforming the fitness industry?'
              label='Mystery'
              path='/team'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;