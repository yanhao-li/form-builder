import React, { useState, useEffect, useContext } from 'react';
import SourcePanel from './components/SourcePanel/SourcePanel';
import { getCodeByFormFields, getCodeByFormField } from './components/FieldCodeBlock/FieldCodeBlock';
import { FormFieldsContext } from 'FormFieldsContext';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-php_laravel_blade";
import "ace-builds/src-noconflict/theme-monokai";
import './CodePanel.css';

function CodePanel(props) {

  const { formFields, } = useContext(FormFieldsContext);
  const initialCode = JSON.stringify(formFields);

  const [ code, setCode] = useState(initialCode);

  useEffect(() => {
    setCode(getCodeByFormFields(formFields));
  }, [formFields])

  return (
    <div id="code-panel">
      <AceEditor
        mode="php_laravel_blade"
        theme="monokai"
        name="source-code-panel"
        editorProps={{ $blockScrolling: true }}
        readOnly={true}
        fontSize={15}
        height="100%"
        setOptions={{ useWorker: false }}
        value={code}
      />
      <SourcePanel />
    </div>
  );
}

export default CodePanel;