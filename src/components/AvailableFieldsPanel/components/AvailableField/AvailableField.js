import React from 'react';
import Icon from '../Icon/Icon';
import { useDrag } from 'react-dnd'

import './AvailableField.css';

export default function AvailableField(props) {

  const { field } = props;

  const [, drag] = useDrag({
    item: { type: 'AVAILABLE-FIELD', field: field },
  })

  return (  
    <div className="available-field" ref={drag}>
      <Icon name={field.type} />
      {field.type}
    </div>
  )}
