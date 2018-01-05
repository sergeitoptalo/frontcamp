import ApiDecorator from './utilities/apiDecorator.js';
import Proxy from './utilities/proxy.js';
import ArticlesApi from './api/articlesApi.js';
import ToggleFactory from './utilities/toggleFactory/toggleFactory.js';
import { getAppTemplate } from './views/templates/appTemplate.js';
let { articlesApi } = require('./api/articlesApi.js');
let apiConfig = require('./config/apiConfig.json');


export default class ViewController {
    constructor(store) {
        this.store = store;
        this.toggleFactory = new ToggleFactory();
        this.actionHolders = [];
        this.proxy;
    }

    renderView() {
        let state = this.store.getState();
        document.body.innerHTML = getAppTemplate(state);

        this.toggleFactory.getPageToggles();

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

            let apiDecorator = new ApiDecorator(new ArticlesApi(), apiConfig.apiKey);
            this.proxy = new Proxy(apiDecorator);
        }

        if (!state.currentChannel) {
            this.renderView();
        } else {
            let news = this.proxy.getData(state.currentChannel)
            .then(data => {
                this.store.dispatch({type: "GET_NEWS_SUCCESS", articles: data })
            })
        }
    }
};
