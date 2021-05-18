import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, name: 'Post 1', message: 'Good day man, you stupid huy', likesCount: 123},
                {id: 2, name: 'Post 2', message: 'Hello, how are you', likesCount: 3},
                {id: 3, name: 'Post 3', message: 'Good man', likesCount: 9},
            ],
            newPostText: 'it-kama'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Viktor'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Roksa'},
                {id: 5, name: 'Yark'},
            ],
            messages: [
                {id: 1, message: 'Hello!!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'What do you like?'},
                {id: 4, message: 'Go wey givnuk!!!!!!!'},
                {id: 5, message: 'Trututu$$$kjnkjnjnj!!'},
            ],
            newMessageBody: 'it-boroda'
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;