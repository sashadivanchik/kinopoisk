import React from 'react';

import './Loader.scss';

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader__spinner'>
        <div className='loader__animation'></div>
      </div>
    </div>    
  )
};

export default Loader;