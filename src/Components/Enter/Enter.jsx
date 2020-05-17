import React, { useState } from 'react';
import EnterModal from '../../Modals/EnterModal';

import '../../Modals/EnterModal/EnterModal.scss';
import './Enter.scss';
import { Registration } from '../Registration/Registration';

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
      { 
        show && (
        <EnterModal setShow={setShow}>
          <Registration />
        </EnterModal>
        )
      }
    </div>
  )
}