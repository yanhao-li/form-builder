import React from 'react';
import './MediasField.css';

const MediasField = (props) => {
  
  return (
    <div className="input">
      <label className="input__label">
        Image
      </label>
      <div className="media">
        <div className="media__field">
          <button className="button button--ghost">
            Attach image
          </button>
        </div>
      </div>

    </div>
  );
}

export default MediasField;