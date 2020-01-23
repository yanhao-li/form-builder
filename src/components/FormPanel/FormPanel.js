import React, { useContext, useState } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import Field from './components/Field/Field';
import { FormFieldsContext } from 'FormFieldsContext';
import { EditModeContext } from 'EditModeContext';
import { getAvailableFieldByType } from 'components/AvailableFieldsPanel/availableFields';
import './FormPanel.css';

function FormPanel(props) {

  const { formFields, setFormFields, resetFormFields } = useContext(FormFieldsContext);
  const [ editMode, setEditMode ] = useState(false);

  const addFieldset = (e) => {
    e.preventDefault();
    setFormFields([...formFields, getAvailableFieldByType('fieldset')])
  }

  const handleFieldUpdate = (updatedIndex, updateField) => {
    setFormFields(formFields.map((field, index) => {
      if (index !== updatedIndex) {
        return field;
      } else {
        return updateField
      }
    }))
  }

  const handleFieldDelete = (deletedIndex) => {
    setFormFields(formFields.filter((field, index) => index !== deletedIndex));
  }

  const toggleEditMode = () => {
    setEditMode(!editMode);
  }

  // Only fieldsets will be rendered on form panel.
  const fieldsets = formFields
    .filter(field => field.type === 'fieldset')
    .map((field, index) => (
      <Field
        field={field}
        index={index}
        key={index}
        onFieldUpdate={handleFieldUpdate}
        onFieldDelete={handleFieldDelete}
        setFieldPlaceholderIndex={() => {}}
        setParentCanDrop={() => {}}
      />
    ))
  

  return (
    <EditModeContext.Provider value={editMode}>
      <div id="form-panel">
        <div id="edit-mode-switcher">
          <span className="switcher-label">Edit mode</span>
          <Toggle 
            icons={false}
            onChange={toggleEditMode}
            defaultChecked={editMode}
          />
        </div>
        { fieldsets }
        <div onClick={addFieldset} className="form-panel-btn"> Add New Fieldset </div>
        <div onClick={resetFormFields} className="form-panel-btn" style={{backgroundColor: '#e31a22', color: '#FFF'}}> Reset The Form </div>
      </div>
    </EditModeContext.Provider>
  );
}

export default FormPanel;