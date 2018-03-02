const INITIAL_STATE = {
    isAuthenticated: false,
    userId: null,
    userName: null,
    message: ''
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'LOAD_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'UPDATE_USER':
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                userName: action.payload.userName,
                userId: action.payload.userId,
            };
        default:
            return state;
    }
};
