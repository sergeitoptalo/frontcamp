let actions = {
    'RunApp': require('./actions/runApp.js'),
    'AddChannels': require('./actions/addChannels.js'),
    'GetNews': require('./actions/getNews.js')
}

export default class ActionList {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.actions = {};
    }

    register(action) {
        this.actions[action] = new actions[action](this.dispatcher);
    }

    getActionByName(actionName, actionData) {
        this.actions[actionName].execute(actionData);
    }
}
