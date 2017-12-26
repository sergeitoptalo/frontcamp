let actions = {
    'RunApp': require('./actions/runApp.js'),
    'AddChannels': require('./actions/addChannels.js')
}

export default class ActionList {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.actions = {};
    }

    register(action) {
        this.actions[action] = new actions[action](this.dispatcher);
    }

    getActionByName(actionName, event) {
        this.actions[actionName].execute(event);
    }
}
