let actions = {
    'RunApp': require('./actions/runApp.js')
}

export default class ActionList {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.actions = {};
    }

    register(action) {
        this.actions[action] = new actions[action](this.dispatcher);
    }

    getByName(actionName, event) {
        this.actions[actionName].execute();
    }
}
