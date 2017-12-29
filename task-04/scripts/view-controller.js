import appOff from './views/baseView.js';
import appView from './views/appView.js';
/* let views = {
    'appOff': require('./views/baseView.js'),
    'runApp': require('./views/appView.js'),
} */

export default class ViewController {
    constructor(store) {
        this.store = store;
        this.renderInitialView();
    }

    renderInitialView() {
        document.body.innerHTML = `
        <header style="background:green">Header</header>
            <div id="root"></div>
        <footer style="background:gray">Footer</footer>
        `;
    }

    render(store) {
        let state = store.getState();

        if (state.appIsRunning) {
            let runAppCode = event => import(/* webpackChunkName: "runApp" */ './runApp').then(module => {
                var turnAppOn = module.default;
                //actionResult.element.removeEventListener('click', runAppCode);
                turnAppOn(this.store);
            });
            runAppCode();
            
        }

        let root = document.querySelector('#root');
        root.innerHTML = '';

        this.renderAppView();

        /* Object.keys(state).forEach(key => {
            if(state[key]) {
                new views[key](store).render(root);
            }
        }) */
    }
};
