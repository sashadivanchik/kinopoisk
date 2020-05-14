import React from 'react';
import PropTypes from 'prop-types';

const EnterModal = ({ children, setShow }) => {

  const closeEnterModal = () => setShow(false);

  return (
    <div className='enter-modal'>
      <div className='enter-modal__container'>
        <button
          className='enter-modal__close'
          type='button'
          onClick={closeEnterModal}
        >
        </button>
        <div 
          className='enter-modal__body'
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default EnterModal;

EnterModal.propTypes = {
  children: PropTypes.element.isRequired,
  setShow: PropTypes.func
};