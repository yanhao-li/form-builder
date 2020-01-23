import React from 'react';
import SourcePanel from './components/SourcePanel/SourcePanel';
import './CodePanel.css';

function CodePanel(props) {

  return (
    <div id="code-panel">
      <div id="source-code-panel">

      </div>
      <SourcePanel />
    </div>
  );
}

export default CodePanel;