import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import FormFieldsContextProvider from './FormFieldsContext';
import CodePanel from './components/CodePanel/CodePanel';
import FormPanel from './components/FormPanel/FormPanel';
import AvailableFieldsPanel from './components/AvailableFieldsPanel/AvailableFieldsPanel';
import './App.css';

function App() {

  return (
    <div className="app">
        <FormFieldsContextProvider>          
          <CodePanel />
          <DndProvider backend={Backend}>
            <FormPanel />
            <AvailableFieldsPanel />
          </DndProvider>
        </FormFieldsContextProvider>
    </div>
  );
}

export default App;
