import React from 'react';

function AboutImages(props) {
  const { imageId, srcPath, alt } = props;

  return(
    <img id={imageId} src={srcPath} alt={alt} />
  )
}

export default AboutImages;