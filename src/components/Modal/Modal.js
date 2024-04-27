import React from 'react';
import './Modal.css';

export function Modal({ children }) {
  return (
    <div className="container-modal">
      {children}
    </div>
  );
}
