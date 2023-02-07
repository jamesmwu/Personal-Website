import React from 'react';
import StylizedButton from '../components/StylizedButton';

function ProjectCard({ title, desc, github, website, tech }) {
  return (
    <div className='box'>
      <div className='innerBox'>
        <h2>{title}</h2>
        <hr />
        <p>{desc}</p>
        <div className='info proj'>
          <ul>
            {tech.map(item => {
              return <li>{item}</li>;
            })}
          </ul>
          {github ? <StylizedButton text={'Github'} link={github} /> : null}
          {website ? <StylizedButton text={'Website'} link={website} /> : null}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
