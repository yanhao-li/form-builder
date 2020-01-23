import React, { useState, useContext } from 'react';
import { EditModeContext } from 'EditModeContext';
import DroppableForm from '../DroppableForm/DroppableForm';
import EditableLabel from '../EditableLabel/EditableLabel';
import './Fieldset.css';

export default function Fieldset(props) {
  const { field, index, onFieldUpdate, canDrop, setCanDrop, setParentCanDrop} = props;
  const [collapsed, setCollapsed] = useState(false);
  const editMode = useContext(EditModeContext);

  const toggleCollapsed = (e) => {
    e.preventDefault();
    
    // Do nothing in edit mode
    if (editMode) {
      setCollapsed(false);
      return;
    }
    
    setCollapsed(!collapsed);
  }

  const updateChildren = (children) => {
    onFieldUpdate(index, {
      ...field,
      children: children
    })
  }

  const handleHeaderLabelUpdate = (label) => {
    onFieldUpdate(index, {
      ...field,
      label: label
    })
  }


  return (
    <div className="fieldset">
      <header className="fieldset__header fieldset--hoverable" onClick={toggleCollapsed}>
        <EditableLabel 
          label={field.label}
          className="fieldset__header__label"
          onLabelChange={handleHeaderLabelUpdate}
        />
      </header> 
      {
        !collapsed && (
          <DroppableForm 
            className="fieldset__content"
            formFields={field.children} 
            onFormFieldsUpdate={updateChildren}
            canDrop={canDrop}
            setCanDrop={setCanDrop}
            setParentCanDrop={setParentCanDrop}
          />
        )
      }
    </div>
  )
}