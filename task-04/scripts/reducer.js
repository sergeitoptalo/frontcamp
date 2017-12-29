const newsApp = (state = {'appOff': true }, action) => {
    switch (action.type) {
        case 'RUN_APP': {
            state['appOff'] = false;
            return state;
        }
        default:
            return state;
    }
}

export { newsApp };
