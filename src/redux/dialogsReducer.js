const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: state.newMessageBody}]
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;