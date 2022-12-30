import React from 'react';

function StylizedButton() {
  function test() {
    console.log('Work!');
  }

  return (
    <div>
      <button className='stylizedBtn' onClick={test()}>
        <p>Resume</p>
      </button>
    </div>
  );
}

export default StylizedButton;
