import React from 'react';
import Headshot from '../img/Headshot.jpg';
import '../styles/Home.css';
import StylizedButton from '../components/StylizedButton';
import Resume from '../data/JamesWu_Resume.pdf';

const LinkedIn = 'https://www.linkedin.com/in/james-wu/';
const GitHub = 'https://github.com/jamesmwu';

function Home() {
  return (
    <div>
      <div className='intro'>
        <img src={Headshot} alt='James Wu profile' />
        <div className='bio'>
          <h1>James Wu</h1>
          <p>
            Hi! Thanks for checking out my website :&#41; <br />
            Whether you're a recruiter or someone stalking around, feel free to
            find more info about me and my projects here!
          </p>
        </div>
      </div>
      <h1>About</h1>
      <p>
        I'm an undergraduate computer science student at UCLA that is passionate
        about learning and exploring. My mission is to create something
        practical that will create value for users!
        <br />
        <br />
        Currently I have the most experience in full stack web and mobile
        development, but some other fields such as cybersecurity and AI are
        incredibly interesting to me which I'm currently learning more about!
      </p>
      <div className='aboutBtns'>
        <StylizedButton text={'Resume'} link={Resume} />
        <StylizedButton text={'LinkedIn'} link={LinkedIn} />
        <StylizedButton text={'GitHub'} link={GitHub} />
      </div>
    </div>
  );
}

export default Home;
