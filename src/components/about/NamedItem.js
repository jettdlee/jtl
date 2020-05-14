import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NamedItem(props) {
  const {icon, text} = props;

  return (
    <span id="named_item">
      <span id="named_icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span id="named_text">
        {text}
      </span>
    </span>
  )
}

export default NamedItem;