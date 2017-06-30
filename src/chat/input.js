import React from 'react';
import { Link } from 'react-router-dom';

const Input = ({ value, onChange, onEnter }) => (
  <div className="input-field">
    <input
      value={value}
      name="input"
      type="text"
      onChange={e => onChange(e.target.value)}
      onKeyUp={e =>
        e.keyCode === 13 && value ? onEnter(e.target.value) : null}
    />
    <Link to="/chat/quintin">Chat with Quintin</Link>

  </div>
);

export default Input;
