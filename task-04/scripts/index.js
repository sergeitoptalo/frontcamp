import Store from './store.js';
import ViewController from './view-controller.js';
import { newsApp as reducer } from './reducer.js';
import '../styles/app-off.scss';


let initialState = {
    'appOff': true
}

let store = new Store(reducer);
let viewController = new ViewController(store);

store.subscribe(() => viewController.render(store));
store.dispatch({});
