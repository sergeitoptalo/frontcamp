import { getAppTemplate } from './views/templates/appTemplate.js';
let { articlesApi } = require('./api/articlesApi.js');


export default class ViewController {
    constructor(store) {
        this.store = store;
        this.actionHolders = [];
    }

    renderView() {
        let state = this.store.getState();
        document.body.innerHTML = getAppTemplate(state);
        let actionHolders = document.querySelectorAll('[data-action]');
        this.actionHolders = actionHolders;
        actionHolders.forEach(holder => {
            let actionAttributes = holder.dataset.action.split(':');
            let event = actionAttributes[0].trim();
            let actionType = actionAttributes[1].trim();
            holder.addEventListener(event, () => {
                let source = holder.dataset.source;
                if (source) {
                    this.store.dispatch({ type: actionType, source: source });
                } else {
                    this.store.dispatch({ type: actionType })
                }
            })
        })
    }

    render() {
        let state = this.store.getState();

        if (state.appIsRunning && !state.channels) {
            let runAppCode = event => import(/* webpackChunkName: "runApp" */ './runApp').then(module => {
                var turnAppOn = module.default;
                //actionResult.element.removeEventListener('click', runAppCode);
                turnAppOn(this.store);
            });
            runAppCode();
        }

        if (!state.currentChannel) {
            this.renderView();

        } else {
            let news = articlesApi(state.currentChannel)
            .then(response => {
                return response.json()
            }).then(data => {
                return data;
            }).then(data => {
                this.store.dispatch({type: "GET_NEWS_SUCCESS", articles: data.articles})
            }).then(() => {
                this.renderView();
            })
        }
    }
};
