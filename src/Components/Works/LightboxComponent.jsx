import React from "react";
import wk from './Works.module.css';
import ImgsViewer from "react-images-viewer";

const LightboxComponent = (props) => {
  
debugger
  return   <ImgsViewer
    imgs={[
      { src: '/static/media/pic13.69b8a18c.jpg' }
    ]}
    isOpen={props.isOpen}
  />
}

export default LightboxComponent;