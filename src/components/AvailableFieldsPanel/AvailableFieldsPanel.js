import React from 'react';

import AvailableField from './components/AvailableField/AvailableField';
import { getAvailableFields } from './availableFields.js'
import './AvailableFieldsPanel.css';

export default function AvailableFieldsPanel(props) {
  return (
    <div id="available-fields-panel">
      {getAvailableFields().map((availableField, index) => (
        <AvailableField field={availableField} key={index} />
      ))}
    </div>
  );
}