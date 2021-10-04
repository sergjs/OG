import React, { useState, useCallback } from "react";
import wk from './Works.module.css';
import Viewer from "./Viewer";


const Works = ({ images, qulityImages }) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    let urlPic = [];
    for (let key in images) {
        let array = {};
        array = images[key];
        for (let newKey in array) {
            urlPic.push(array[newKey]);
        }
    }
    return <div className={wk.container}>
        {urlPic.map((photo, index) =>
            <div className={wk.ibg}
                style={{ backgroundImage: `url(${photo})` }} onClick={() => openImageViewer(index) }
                key={ index }
                >
            </div>
        )}
    {isViewerOpen &&  (
        <Viewer 
        qulityImages= {qulityImages}
        urlPic = {urlPic}
        currentImage = {currentImage}
        closeImageViewer = {closeImageViewer}
        />
    )}
    </div >
}

export default Works;

