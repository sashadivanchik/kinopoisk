import React, { useState } from 'react';
import RegistrationModal from '../../Modals/RegistrationModal';
import { Registration } from '../Registration/Registration';

import '../../Modals/RegistrationModal/RegistrationModal.scss';
import './EnterRegistration.scss';

export const EnterRegistration = () => {

  const [ show, setShow ] = useState(false);

  return (
    <div className='enter-registration'>
      <button 
        className='enter-registration__open' 
        onClick={() => setShow(true)}
      >
        Регистрация
      </button>
      { 
        show && (
        <RegistrationModal setShow={ setShow }>
          <Registration setShow={ setShow } />
        </RegistrationModal>
        )
      }
    </div>
  )
}