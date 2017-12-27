class AddChannels {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    execute({ channels } = actionData) {
        let _this = this;
        _this.dispatcher.dispatch({
            actionType: 'add-channels',
            channels: channels
        });
    };
};

module.exports = AddChannels;
