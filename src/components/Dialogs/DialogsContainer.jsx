import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        addMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

let authRedirectContainer = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectContainer);

export default DialogsContainer;