import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getStatus, profile, updateStatus, savePhoto, saveProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

class WorksContainer extends React.Component {

    render() {
        return (
            <Works {...this.props}
                // isOwner={!this.props.match.params.iserId}
                // userProfile={this.props.userProfile}
                // status={this.props.status}
                // updateStatus={this.props.updateStatus}
                // savePhoto={this.props.savePhoto}
            />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        appreducer: state.app.photos
    }
};

export default compose(connect(mapStateToProps, { profile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);