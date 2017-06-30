import React from 'react';

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
    <input onClick={event => console.log(event.target.value)} value="hi" />
  </div>
);

export default Input;
