import React, { useState } from 'react';
import EnterModal from '../../Modals/EnterModal';

import '../../Modals/EnterModal/EnterModal.scss';
import './Enter.scss';

export const Enter = () => {

  const [ show, setShow ] = useState(false);

  return (
    <div className='enter'>
      <button 
        className='enter__open' 
        onClick={() => setShow(true)}
      >
        вход
      </button>
      <EnterModal show={ show } setShow={setShow}>
        <input type='text'/>
        <input type='text'/>
      </EnterModal>
    </div>
  )
}