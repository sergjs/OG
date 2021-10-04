import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getQualityPhotos } from "../../redux/app-reducer";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import Works from './Works';

class WorksContainer extends React.Component {

    componentDidMount() {
        this.props.getPhotos();
        this.props.getQualityPhotos()
    }

    componentDidUpdate(prevProps) {
            if (this.props.getPhotos != prevProps.getPhotos) {
        this.props.getPhotos();
        this.props.getQualityPhotos()
    }
}

    render() {
        return (
            <Works {...this.props}
            images = {this.props.images}
            qulityImages= {this.props.qulityImages}
            />
        );
    };
    
}

let mapStateToProps = (state) => {
    return {
        images: state.app.photos,
        qulityImages: state.app.qualityPhoto
    }
};

export default compose(connect(mapStateToProps, { getPhotos, getQualityPhotos }),
    withRouter)(WorksContainer);


