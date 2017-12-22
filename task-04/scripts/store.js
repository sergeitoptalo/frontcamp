export default class Store {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return Object.assign({}, this.state);;
    };
};

