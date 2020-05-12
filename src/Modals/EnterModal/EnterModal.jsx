import React from 'react';

const EnterModal = ({ children, show, setShow }) => {
  const content = show && (
    <div className='enter-modal'>
      <div className='enter-modal__container'>
        <button
          className='enter-modal__close'
          type='button'
          onClick={() => setShow(false)}
        >
        </button>
        <div className='enter-modal__body'>{children}</div>
      </div>
    </div>
  )

  return content
}

export default EnterModal;