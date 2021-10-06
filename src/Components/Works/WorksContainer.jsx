import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, getQualityPhotos } from "../../redux/app-reducer";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import Works from './Works';

class WorksContainer extends React.Component {

    componentDidMount() {
        // let number = this.props.match.params
        this.props.getPhotos();
        
        this.props.getQualityPhotos();
    }

    componentDidUpdate(prevProps) {
            if (this.props.getPhotos != prevProps.getPhotos) {
        this.props.getPhotos();
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


