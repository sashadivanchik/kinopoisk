import React from '../../pages/MainPage/node_modules/react';
import PropTypes from 'prop-types';

const RegistrationModal = ({ children, setShow }) => {

  const closeRegistrationModal = () => setShow(false);

  return (
    <div className='registration-modal'>
      <div className='registration-modal__container'>
        <button
          className='registration-modal__close'
          type='button'
          onClick={closeRegistrationModal}
        >
        </button>
        <div 
          className='registration-modal__body'
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default RegistrationModal;

RegistrationModal.propTypes = {
  children: PropTypes.element.isRequired,
  setShow: PropTypes.func
};