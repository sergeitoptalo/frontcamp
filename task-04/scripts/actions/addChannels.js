class AddChannels {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    execute(payload) {
        let _this = this;
        _this.dispatcher.dispatch({
            actionType: 'add-channels',
            channels: payload.channels
        });
    };
};

module.exports = AddChannels;
