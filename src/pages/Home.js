import React, { useState } from 'react';
import Headshot from '../img/Headshot.jpg';
import '../styles/Home.css';
import StylizedButton from '../components/StylizedButton';
import Resume from '../data/JamesWu_Resume.pdf';

const LinkedIn = 'https://www.linkedin.com/in/james-wu/';
const GitHub = 'https://github.com/jamesmwu';
const funFacts = [
  '',
  'Some of my hobbies include playing basketball, working out, drawing, and playing violin!',
  "I'm mildly red-green colorblind. Upon hearing this, most people point to the nearest red object and ask me what color it is.",
  "I love public speaking, and have participated in mock trial as well as advanced two levels through the International Rotary 4-Way Test speech competition. I've also presented a Ted Talk before about handling criticism.",
  'One time a coyote tried to attack me. This story is now my go to ice-breaker.',
  "I'd really like to run a marathon or triathlon some day, but hot cheetos just taste too good.",
  'I enjoy drawing specifically landscapes, mountains, and nature-related stuff.',
  'I have perfect pitch!',
  "I would like to think that I'm decent at poker, though my friends disagree.",
  'At UCLA, sometimes I like to go for walks at night on campus.'
];

function Home() {
  const [facts, setFacts] = useState(0);

  return (
    <div>
      <div className='intro'>
        <img src={Headshot} alt='James Wu profile' />
        <div className='bio'>
          <h1>James Wu</h1>
          <p>
            Hi! Thanks for checking out my website :&#41; <br />
            Whether you're a recruiter or someone stalking my socials, feel free
            to find more info about me and my projects here!
          </p>
        </div>
      </div>
      <h1>About</h1>
      <p>
        I'm an undergraduate computer science student at UCLA that is passionate
        about technology and its applications! Currently I have the most
        experience in full stack web and mobile development, but I'm exploring
        other fields such as AI and cybersecurity.
        <br />
        Feel free to reach out, I'm always open to opportunities!
      </p>
      <div className='aboutBtns'>
        <StylizedButton text={'Resume'} link={Resume} />
        <StylizedButton text={'LinkedIn'} link={LinkedIn} />
        <StylizedButton text={'GitHub'} link={GitHub} />
        <StylizedButton
          text={'Fun Facts'}
          action={() => {
            if (facts >= funFacts.length) {
              setFacts(1);
            } else setFacts(facts + 1);
          }}
        />
      </div>
      <h4>{funFacts[facts]}</h4>
    </div>
  );
}

export default Home;
