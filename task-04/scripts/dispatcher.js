export default class Dispatcher {
    constructor() {
        this.subscribers = [];
    }

    dispatch(actionResult) {
        this.subscribers.forEach(function (subscriber) {
            return subscriber(actionResult);
        });
    };

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    };
};
