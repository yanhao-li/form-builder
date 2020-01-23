import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EditModeContext } from 'EditModeContext';
import './EditableLabel.css';

const EditableLabel = (props) => {

  const { className, onLabelChange, label } = props;
  const editMode = useContext(EditModeContext);

  const handleLabelChange = (e) => {
    onLabelChange(e.target.value);
  }

  return (
    <input
      type="text"
      className={className + (editMode ? " label-editable" : "")}
      value={label}
      onChange={handleLabelChange}
      disabled={!editMode}
    />
  )
}

EditableLabel.propTypes = {
  label: PropTypes.string.isRequired,
  onLabelChange: PropTypes.func.isRequired
}

export default EditableLabel;
