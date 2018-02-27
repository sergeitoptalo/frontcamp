const INITIAL_STATE = {
    loading: false,
    posts: []
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
        default:
            return state;
    }
};
