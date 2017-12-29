export default class Store {
    constructor(reducer) {
        this.state;
        this.reducer = reducer;
        this.subscribers = [];
    }

    getState() {
        return this.state;
    };

    dispatch(action) {
        let newState = this.reducer(this.state, action);
        this.state = newState;
        this.subscribers.forEach(fn => fn(this));
    }

    subscribe(listener) {
        this.subscribers.push(listener);
        return () => {
            this.subscribers.filter(subscriber => subscriber !== listener)
        }
    }




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

