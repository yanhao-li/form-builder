import React, { useState } from 'react';
import './CheckboxField.css';

const CheckboxField = (props) => {

  const [ checked, setChecked ] = useState(false);

  return (
    <div className="checkbox">
      <input type="checkbox" className="checkbox__input" checked={checked} onChange={() => setChecked(!checked)} />
      <label className="checkbox__label">
        Featured
      </label>
    </div>
  );
}

export default CheckboxField;