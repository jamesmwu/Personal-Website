import React from 'react';
import StylizedButton from '../components/StylizedButton';

function InternshipCard({ title, desc, website, points, tech }) {
  let stack = tech.join(', ');

  return (
    <div className='box'>
      <div className='innerBox'>
        <h2>{title}</h2>
        <hr />
        <p>{desc}</p>
        <div className='info'>
          <ul>
            {points.map(item => {
              return <li>{item}</li>;
            })}
          </ul>

          <div className='tech'>
            <div className='techContainer'>
              <h3>Technologies:&nbsp;&nbsp;</h3>
              <p>{stack}</p>
            </div>
            {website ? (
              <StylizedButton text={'Website'} link={website} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipCard;
