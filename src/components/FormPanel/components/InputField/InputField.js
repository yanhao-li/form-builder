import React from 'react';
import EditableLabel from '../EditableLabel/EditableLabel';
import './InputField.css';

const InputField = (props) => {

  const handleLabelChange = (label) => {
    
  }

  return (
    <div className="input">
      <label className="input__label">
        <EditableLabel
          className="input__label__label"
          label="Subtitle"
          onLabelChange={handleLabelChange}
        />
        <span className="input__note">
          Example note
        </span>
      </label>
      <div className="input__field">
        <input type="text" placeholder="Please enter the text here" />
      </div>
    </div>
  );
}

export default InputField;