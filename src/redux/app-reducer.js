let initialState = {
    photos = [],
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOTAL_PHOTOS': {
            return { ...state, photos: [...action.photos] }
        }
        default:
            return state;
    }
 }

 export const setTottalPhotos = (photos) => ({ type: 'TOTAL_PHOTOS', photos });

 export const getPhotos = (photos) =>  (dispatch) => {
    dispatch(setTottalPhotos(photos));
}

export default appReducer;