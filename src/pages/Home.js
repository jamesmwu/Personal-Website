import React, { useState } from 'react';
import Headshot from '../img/LinkedIn_White.png';
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
      <h1>HOME</h1>
    </div>
  );
}

export default Home;
