const INITIAL_STATE = {
    isLoaded: false
};

export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case 'LOAD_APP':
            return {
                ...state,
                isLoaded: true
            };
        default:
            return state;
    }
};
