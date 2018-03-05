const INITIAL_STATE = {
    loading: false,
    posts: [],
    currentPost: null,
    currentAuthor: null
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'LOAD_POSTS':
            return {
                ...state,
                loading: true,
            };
        case 'UPDATE_POSTS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
            };
        case 'UPDATE_CURRENT_POST':
            return {
                ...state,
                loading: false,
                currentPost: action.payload,
            };
        case 'UPDATE_CURRENT_AUTHOR':
            return {
                ...state,
                loading: false,
                currentAuthor: action.payload,
            };
        default:
            return state;
    }
};
