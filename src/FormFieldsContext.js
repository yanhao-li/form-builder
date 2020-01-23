import React, { useState } from 'react';
import { getAvailableFieldByType } from './components/AvailableFieldsPanel/availableFields';

const initialState = [getAvailableFieldByType('fieldset')];

export const FormFieldsContext = React.createContext({
  formFields: initialState,
  setFormFields: () => {}
});

const FormFieldsContextProvider = (props) => {
  
  const setFormFields = (formFields) => {
    setFormFieldsContext({...formFieldsContext, formFields: formFields})
  }

  const resetFormFields = () => {
    if(window.confirm('Are you sure to reset the form?')) {
      setFormFields(initialState);
    }
  }

  const [formFieldsContext, setFormFieldsContext] = useState({
    formFields: initialState,
    setFormFields: setFormFields,
    resetFormFields: resetFormFields
  });

  return (
    <FormFieldsContext.Provider value={formFieldsContext}>
      {props.children}
    </FormFieldsContext.Provider>
  )
}

export default FormFieldsContextProvider;