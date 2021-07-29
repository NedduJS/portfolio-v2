import React from 'react';

import Image from 'next/image';

const Tech = ({ techName, techImage }) => {
  return (
    <div className='tech'>
      <Image
        className='tech__image'
        src={techImage}
        alt='Technology used in the proyect'
        width='20px'
        height='20px'
      />
      <p className='tech__name'>{techName}</p>
    </div>
  );
};

export default Tech;
