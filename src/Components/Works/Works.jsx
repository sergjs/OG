import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import wk from './Works.module.css';
import LightboxComponent from "./LightboxComponent";
import { propTypes } from "react-bootstrap/esm/Image";

import ImgsViewer from "react-images-viewer";

function importAll(r) {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../img/woks/'));

const Works = () => {
    let [number, correctNumber] = useState(0);
    let [isOpen, setIsOpen] = useState(false);

    let urlPic = [];
    for (let key in images) {
        let array = {};
        array = images[key];
        for (let newKey in array) {
            urlPic.push(array[newKey]);
        }
    }
    return <div className={wk.container}>
        {urlPic.map(photo =>
            <div className={wk.ibg}
                style={{ backgroundImage: `url(${photo})` }} onClick={() => { correctNumber = photo; console.log(photo); setIsOpen = true }}>
            </div>
        )}
       
       <ImgsViewer
    imgs={[
      { src: '../images/photo-1.jpg' },
    ]}
    isOpen={isOpen}
  />
    </div >
}

export default Works;