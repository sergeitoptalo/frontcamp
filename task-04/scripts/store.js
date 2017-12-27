export default class Store {
    constructor(state) {
        this.state = state;
    }

    getState() {
        return Object.assign({}, this.state);;
    };

    setNextState(actionResult) {
        switch (actionResult.actionType) {
            case 'run-app': {
                this.state.appIsRunning = true;
                let runAppCode = event => import(/* webpackChunkName: "runApp" */ './runApp').then(module => {
                    var turnAppOn = module.default;
                    actionResult.element.removeEventListener('click', runAppCode);
                    turnAppOn();
                });
                runAppCode();
                break;
            }

            case 'add-channels': {
                this.state.channels = actionResult.channels;
                break;
            }

            case 'get-news': {
                this.state.currentChannel = actionResult.source;
                this.state.articles = actionResult.articles;

                break;
            }
        }
    }

};

