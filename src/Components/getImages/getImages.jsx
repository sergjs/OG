export const ImportAll = (r) => {
    let images = [];
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
export const getImages = () => {
    const imagesDate = ImportAll(require.context('../img/woks/'));
    return imagesDate;
}
export const getCualityImages = () => {
    const imagesCualityDate = ImportAll(require.context('../img/lazy'));
    return imagesCualityDate;
}