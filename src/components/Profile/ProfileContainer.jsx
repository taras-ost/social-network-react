import React from 'react';
import Profile from "./ProfileInfo/ProfileInfo";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let authRedirectContainer = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(authRedirectContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);