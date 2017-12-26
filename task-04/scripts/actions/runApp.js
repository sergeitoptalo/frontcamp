class RunApp {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    execute(data) {
        let _this = this;
        _this.dispatcher.dispatch({
            actionType: 'run-app',
            element: data.target
        });
    };
};

module.exports = RunApp;
