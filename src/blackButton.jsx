import React from 'react';
import './blackButton.css';

const BlackButton = ({ label, onClick }) => (
  <button className="black-button" onClick={onClick}>
    {label}
  </button>
);

export default BlackButton;