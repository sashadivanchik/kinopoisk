import React from 'react';

import './Loader.scss';

const Loader = () => {
  console.log('loader')
  return (
    <div className='loader'>
      <div className='loader__animation'></div>
    </div>
  )
};

export default Loader;