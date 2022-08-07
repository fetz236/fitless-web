import React from 'react';
import '../../App.css';
import './GeneralInfo.css'
export default function GeneralInfo() {
  return (
      <>
        <div className='general-container'>
            <h1>What is Fitless?</h1>
            <p>
            Fitless is a start-up that will revolutionise all types of fitness memberships. Within the app you may 
            reserve an appointment or session at a gym, with a fitness class or a personal 1 on 1 session with a professional 
            trainer. Our project aim is to create a subscription pass that will allow you to access both public and private gyms. 
            The differential factor of Fitless is to incorporate private gyms to provide a cheap subscription that allow users of 
            Fitless to access facilities including but not limited to office buildings, apartment buildings, 
            hotels, private residences, as well as existing fitness facilities. 
            </p>
            <p>
            Fitless eradicates the need for compromise with the ability to workout, learn martial arts or even take up salsa dancing wherever you may be under one subscription. 
            </p>

        </div>
        <div className='general-container' style={{height:'35vh'}}>
            <h1>How will Fitless work?</h1>
            <p>
                Fitless will work on three applications. The Fitless app for the consumer where you may search and book your sessions. 
                The Fitless trainer app which is the app where trainers who sign up with Fitless may view and manage their sessions. 
                Finally, the Fitless Service app for gyms and other establishments where they may manage and view who they will be 
                joining them and when. 
            </p>
        </div>
        </>
  );
}