const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, name: 'Post 1', message: 'Good day man, you stupid huy', likesCount: 123},
        {id: 2, name: 'Post 2', message: 'Hello, how are you', likesCount: 3},
        {id: 3, name: 'Post 3', message: 'Good man', likesCount: 9},
    ],
    newPostText: 'it-kama'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4, name: 'Post 3', message: state.newPostText, likesCount: 999}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;