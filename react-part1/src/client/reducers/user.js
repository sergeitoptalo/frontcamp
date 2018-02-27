const INITIAL_STATE = {
    isAuthenticated: false,
    userId: null,
    userName: null
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'LOAD_USER':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};
