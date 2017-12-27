class RunApp {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    execute(actionData) {
        let _this = this;
        _this.dispatcher.dispatch({
            actionType: 'run-app',
            element: actionData.event.target
        });
    };
};

module.exports = RunApp;
