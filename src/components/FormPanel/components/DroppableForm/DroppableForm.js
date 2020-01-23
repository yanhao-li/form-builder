import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Field from '../Field/Field';
import { useDrop } from 'react-dnd';
import './DroppableForm.css';

function DroppableForm(props) {

  const formFields = props.formFields || props.children;
  const { onFormFieldsUpdate, className, canDrop, setCanDrop, setParentCanDrop } = props;

  const [ fieldPlaceholderIndex, setFieldPlaceholderIndex ] = useState(0);

  const [{ isOver, draggedItem }, drop] = useDrop({
		accept: 'AVAILABLE-FIELD',
    drop: (item) => dropped(item),
    canDrop: () => canDrop,
    hover: (item, monitor) => {
      setCanDrop(true);
      setParentCanDrop(false);
    },
		collect: monitor => ({
      isOver: monitor.isOver(),
      draggedItem: monitor.getItem()
		}),
  })

  const dropped = (droppedItem) => {
    const newFormField = [
      ...formFields.slice(0, fieldPlaceholderIndex), 
      droppedItem.field, 
      ...formFields.slice(fieldPlaceholderIndex)
    ]
    onFormFieldsUpdate(newFormField);
  }

  const handleFieldUpdate = (updatedIndex, updateField) => {
    onFormFieldsUpdate(formFields.map((field, index) => {
      if (index !== updatedIndex) {
        return field;
      } else {
        return updateField
      }
    }))
  }

  const handleFieldDelete = (deletedIndex) => {
    onFormFieldsUpdate(formFields.filter((field, index) => index !== deletedIndex));
  }

  const getFormFieldsList = (setFieldPlaceholderIndex, draggedItem) => {
    const fieldPlaceholder = (
      <Field
        field={draggedItem ? draggedItem.field : {}}
        isPlaceholder={true}
        key="placeholder"
        setFieldPlaceholderIndex={setFieldPlaceholderIndex}
        setParentCanDrop={(canDrop) => setCanDrop(canDrop)}
      >  
      </Field>
    );

    const formFieldsList = formFields.map((field, index) => 
      <Field
        field={field}
        index={index}
        key={index}
        setFieldPlaceholderIndex={setFieldPlaceholderIndex}
        onFieldUpdate={handleFieldUpdate}
        onFieldDelete={handleFieldDelete}
        setParentCanDrop={(canDrop) => setCanDrop(canDrop)}
      />
    );

    if (canDrop && isOver) {
      return [...formFieldsList.slice(0, fieldPlaceholderIndex), fieldPlaceholder, ...formFieldsList.slice(fieldPlaceholderIndex)];
    } else {
      return formFieldsList
    }
  }

  return (
    <div className={"droppable-form " + className} ref={drop}>
      { getFormFieldsList(setFieldPlaceholderIndex, draggedItem) }
    </div>
  );
}

DroppableForm.propTypes = {
  canDrop: PropTypes.bool.isRequired,
  setParentCanDrop: PropTypes.func.isRequired
}

export default DroppableForm;