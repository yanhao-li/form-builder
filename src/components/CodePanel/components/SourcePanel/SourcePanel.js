import React, { useState, useEffect, useContext } from 'react';
import { FormFieldsContext } from 'FormFieldsContext';
import './SourcePanel.css';

function SourcePanel(props) {

  const { formFields, setFormFields } = useContext(FormFieldsContext);
  const [ jsonValid, setJsonValid ] = useState(true);
  
  const getJsonByFormFields = (formFields) => {
    return JSON.stringify(formFields);
  }
  
  const initialJson = localStorage.getItem('json') === null ? getJsonByFormFields(formFields) : localStorage.getItem('json');
  const [ json, setJson ] = useState(initialJson);
  

  const setFormFieldsByJson = (json) => {
    if (parseJson(json)) {
      setFormFields(parseJson(json));
    }
  }

  const handleJsonChange = (json) => {
    setJson(json);
    setFormFieldsByJson(json);
  }

  const parseJson = (json) => {
    try {
      JSON.parse(json);
      setJsonValid(true);
    } catch (e) {
      setJsonValid(false);
      return false;
    }
    return JSON.parse(json);
  }

  useEffect(() => {
    setFormFieldsByJson(initialJson);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Run side effects when json get updated
  useEffect(() => {
    // console.log('localStorage get updated: ', json);
    parseJson(json);
    localStorage.setItem('json', json);
    window.history.pushState(null, '', '?data=' + json);
  }, [json])

  // Update raw data when formFields get updated
  useEffect(() => {
    // console.log('formFields get updated: ', formFields);
    if (formFields.length === 0 && !parseJson(json)) {
      return;
    }
    setJson(getJsonByFormFields(formFields));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formFields)]);
  
  return (
    <div id="json-panel">
    { !jsonValid && <p id="invalid-json-warning">Invalid JSON</p> }
    <textarea 
      type="text"
      id="json-textarea"
      data-gramm_editor="false"
      value={json}
      onChange={e => handleJsonChange(e.target.value)}
    />
  </div>
  );
}

export default SourcePanel;