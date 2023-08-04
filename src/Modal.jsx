import React from 'react';
import './modal.css';

const Modal = ({ message, image, onClose }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <p>{message}</p>
        <img src={image} alt="Winner" className="modal-image" />
        <button type="button" className="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
