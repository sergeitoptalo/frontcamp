class AddChannels {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    execute(data) {
        let _this = this;
        _this.dispatcher.dispatch({
            actionType: 'add-channels',
            channels: data
        });
    };
};

module.exports = AddChannels;
