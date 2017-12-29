//import Controller from './controller.js';
import Store from './store.js';
import ViewController from './view-controller.js';
import { newsApp as reducer } from './reducer.js';
import '../styles/app-off.scss';

if (!PRODUCTION) {
    console.log('DEVELOPMENT MODE');
}

if (PRODUCTION) {
    console.log('PRODUCTION MODE');
}

let viewController = new ViewController();

let initialState = {
    'appOff': true
}

let store = new Store(reducer);
store.subscribe(viewController.render);
store.dispatch({});
document.addEventListener('click', () => {
    store.dispatch({ type: 'RUN_APP' })
})


//new Controller().renderApp();

