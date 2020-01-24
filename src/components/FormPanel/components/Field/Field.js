import React, { useRef, useState, useContext } from 'react';
import { EditModeContext } from 'EditModeContext';
import { useDrop } from 'react-dnd';

import './Field.css';
import Fieldset from '../Fieldset/Fieldset';
import InputField from '../InputField/InputField';
import MediasField from '../MediasField/MediasField';
import CheckboxField from '../CheckboxField/CheckboxField';

function Field(props) {
  const ref = useRef(null);
  const [ canDrop, setCanDrop ] = useState(false);
  const editMode = useContext(EditModeContext);
  const { field, isPlaceholder, index, setFieldPlaceholderIndex, setParentCanDrop, onFieldDelete } = props;
  const [,drop] = useDrop({
    accept: 'AVAILABLE-FIELD',
    hover(item, monitor) {
      if (index === undefined) {
        return;
      }
      
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const hoverClientY = monitor.getClientOffset().y - hoverBoundingRect.top;
      
      if (hoverClientY < hoverMiddleY) {
        setFieldPlaceholderIndex(index);
        return;
      }
      
      if (hoverClientY > hoverMiddleY) {
        setFieldPlaceholderIndex(index + 1);
        return;
      }
    }
  })
  
  drop(ref);

  const { type } = field;

  const handleDeleteField = () => {
    onFieldDelete(index);
  }

  let fieldBody;

  switch (type) {
    case 'fieldset':
      fieldBody = (
        <Fieldset canDrop={canDrop} setCanDrop={setCanDrop} setParentCanDrop={setParentCanDrop} {...props} /> 
      );
      break;
    case 'input':
      fieldBody = (
        <InputField />
      );
      break;
    case 'medias':
      fieldBody = (
        <MediasField />
      );
      break;
    case 'checkbox':
      fieldBody = (
        <CheckboxField />
      );
      break;
    default:
      fieldBody = type;
      break;
  }

  return (
    <div className={'field' + (isPlaceholder ? ' placeholder' : '') + (editMode ? ' edit-mode' : '')} ref={ref}>
      { editMode && 
      (<div className="delete-field-btn" onClick={handleDeleteField}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </div>)
      }
      {fieldBody}
    </div>
  );
}

export default Field;