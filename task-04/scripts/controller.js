import Dispatcher from './dispatcher.js';
import Store from './store.js';
import AppView from './views/appView.js';
import ActionList from './actionList.js';

export default class Controller {
    renderApp() {
        let dispatcher = new Dispatcher();
        let store = new Store({
            appIsRunning: false
        });

        let actionList = new ActionList(dispatcher);
        window.actionList = actionList;

        let appView = new AppView(actionList);

        actionList.register('RunApp');
        actionList.register('AddChannels');
        actionList.register('GetNews');

        dispatcher.subscribe(actionResult => {
            let currentState = Object.assign({}, store.state);
            store.setNextState(actionResult);
            this.attachView(appView.updateView(store.getState(), currentState));
        });
        
        this.attachView(appView.updateView(store.getState()));
    }

    attachView(container) {
        document.body.appendChild(container);
    }
}
