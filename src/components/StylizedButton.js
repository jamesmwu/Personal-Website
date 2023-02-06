import React from 'react';

function StylizedButton({ text, link }) {
  return (
    <div className='stylizedBtn'>
      <a href={link} target='_blank'>
        {text}
      </a>
    </div>
  );
}

export default StylizedButton;
