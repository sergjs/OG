import {getImages, getCualityImages} from '../Components/getImages/getImages'

let initialState = {
    photos: [],
    qualityPhoto: []
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOTAL_PHOTOS': {
            return { ...state, photos: action.photos }
        }
        case 'TOTAL_QUALITY_PHOTOS': {
            return { ...state, qualityPhoto: action.qualityPhotos }
        }
        default:
            return state;
    }
 }
 
 export const setTottalPhotos = (photos) => ({ type: 'TOTAL_PHOTOS', photos });
 export const setTottalQualityPhotos = (qualityPhotos) => ({ type: 'TOTAL_QUALITY_PHOTOS', qualityPhotos });

 export const getPhotos = () => (dispatch) => {
    let photos = getImages();
    dispatch(setTottalPhotos(photos));
};

export const getQualityPhotos = () => (dispatch) => {
    let qualityPhotos = getCualityImages();
    dispatch(setTottalQualityPhotos(qualityPhotos));
}


export default appReducer;