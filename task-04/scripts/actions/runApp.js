class RunApp {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    execute(event) {
        let _this = this;
        _this.dispatcher.dispatch({ actionType: 'run-app' });
    };
};

module.exports = RunApp;
