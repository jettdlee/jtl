import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ExternalLinkIcon(props) {
  return (
    <a
      className="link-icon btn btn-outline-light"
      href={props.externalLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  )
}

export default ExternalLinkIcon;