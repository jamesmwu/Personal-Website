import React from 'react';

function StylizedButton({ text, link, action }) {
  if (action) {
    return (
      <div
        className='stylizedBtn'
        onClick={() => {
          action();
        }}
      >
        {text}
      </div>
    );
  }

  return (
    <div className='stylizedBtn'>
      <a href={link} target='_blank' rel='noreferrer'>
        {text}
      </a>
    </div>
  );
}

export default StylizedButton;
