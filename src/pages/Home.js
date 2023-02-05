import React from 'react';
import Headshot from '../img/Headshot.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <div className='intro'>
        <img src={Headshot} />
        <div className='bio'>
          <h1>James Wu</h1>
          <p>
            Hi! Thanks for checking out my website :&#41; <br />
            Feel free to find more info about me and my projects below!
          </p>
        </div>
      </div>
      <h1>About</h1>
    </div>
  );
}

export default Home;
