import appOff from './views/baseView.js';
let views = {
    'appOff': require('./views/baseView.js')
}

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
        let root = document.querySelector('#root');
        root.innerHTML = '';
        Object.keys(state).forEach(key => {
            if(state[key]) {
                let a = views[key];
                let b = Object.keys(state);
                new a().render(root);
            }
        })
    }
};
