import React from 'react';
import ImageViewer from 'react-simple-image-viewer';
import wk from './Works.module.css';


const Viewer = ({ currentImage, closeImageViewer, qulityImages }) => {
    let urlPic = [];
    for (let key in qulityImages) {
        let array = {};
        array = qulityImages[key];
        for (let newKey in array) {
            urlPic.push(array[newKey]);
        }
    }

    return <div>
            <ImageViewer
                src={urlPic}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
            />
            <div className={wk.text_viewer}>
            <p > Выполнено для Elski design</p>
            </div>
    </div>
}

export default Viewer;