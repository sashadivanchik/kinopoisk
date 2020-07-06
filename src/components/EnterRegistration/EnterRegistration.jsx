import React, { useState } from 'react';

import '../../modals/RegistrationModal/RegistrationModal.scss';
import './EnterRegistration.scss';
import RegistrationModal from '../../modals/RegistrationModal/RegistrationModal';
import { Registration } from '../Registration/Registration';

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