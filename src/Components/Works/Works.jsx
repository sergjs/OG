import React, { useState, useCallback } from "react";
import wk from './Works.module.css';
import Viewer from "./Viewer";

const Works = ({ images, qulityImages }) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [newPortion, setNewPortion] = useState(16);
    const [isButton, setIsButton] = useState(true);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const addNewPortion = () => {
        setNewPortion(newPortion + 16);
        if (urlPic.length - 16 < newPortion) {
            setIsButton(false);
        }
    };

    let urlPic = [];
    for (let key in images) {
        let array = {};
        array = images[key];
        for (let newKey in array) {
            urlPic.push(array[newKey]);
        }
    }
    return <div>
        <div className={wk.container}>
            {urlPic.slice(0, newPortion).map((photo, index) =>
                <div className={wk.ibg}
                    style={{ backgroundImage: `url(${photo})` }} onClick={() => openImageViewer(index)}
                    key={index}   >
                </div>
            )}
            {isViewerOpen && (
                <Viewer
                    qulityImages={qulityImages}
                    urlPic={urlPic}
                    currentImage={currentImage}
                    closeImageViewer={closeImageViewer}
                />
            )}
        </div >
        {isButton &&
            <button className={wk.button_next} onClick={() => addNewPortion()}><p>Смотреть больше</p></button>}
    </div>
}

export default Works;
