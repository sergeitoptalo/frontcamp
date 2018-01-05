export default class Store {
    constructor(reducer) {
        this.state;
        this.reducer = reducer;
        this.subscribers = [];
    }

    getState() {
        return this.state;
    };

    dispatch(action) {
        let newState = this.reducer(this.state, action);
        this.state = newState;
        this.subscribers.forEach(fn => fn(this));
    }

    subscribe(listener) {
        this.subscribers.push(listener);
        return () => {
            this.subscribers.filter(subscriber => subscriber !== listener)
        }
    }
};
