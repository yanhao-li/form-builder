import React from 'react';
import EditableLabel from '../EditableLabel/EditableLabel';
import './InputField.css';

const InputField = (props) => {

  const { field, index, onFieldUpdate } = props;
  console.log(field);

  const handleLabelChange = (label) => {
    onFieldUpdate(index, {
      ...field,
      label: label
    })
  }

  return (
    <div className="input">
      <label className="input__label">
        <EditableLabel
          className="input__label__label"
          label={field.label}
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