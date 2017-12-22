import Dispatcher from './dispatcher.js';
import Store from './store.js';
import AppView from './views/appView.js';
import ActionList from './actionList.js';

export default class Controller {
    constructor() {

    }

    renderApp() {
        let dispatcher = new Dispatcher();
        let store = new Store({
            appIsRunning: false
        });
        let appView = new AppView();
        let actionList = new ActionList(dispatcher);
        actionList.register('RunApp');
        dispatcher.subscribe(actionResult => {
            let currentState = Object.assign({}, store.state);
        });
        this.attachView(appView.getElement(store.state));
    }

    attachView(container) {
        document.body.appendChild(container);
    }
}
