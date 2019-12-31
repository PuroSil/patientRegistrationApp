import React from 'react';
import './button.css';

const Button = ({ content }) => {
  return (
    <button type="submit">
      { content }
    </button>
  )
};

export default Button;
