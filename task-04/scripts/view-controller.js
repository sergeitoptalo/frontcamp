import ApiDecorator from './utilities/apiDecorator.js';
import Proxy from './utilities/proxy.js';
import ArticlesApi from './api/articlesApi.js';
import ToggleFactory from './utilities/toggleFactory/toggleFactory.js';
import * as actions from './actions/actions.js';
import { getAppTemplate } from './views/templates/appTemplate.js';
let { articlesApi } = require('./api/articlesApi.js');
let apiConfig = require('./config/apiConfig.json');


export default class ViewController {
    constructor(store) {
        this.store = store;
        this.toggleFactory = new ToggleFactory();
        this.actionHolders = [];
        this.proxy;
        this.currentChannel = null;
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
            let action = actionAttributes[1].trim();
            holder.addEventListener(event, () => {
                let source = holder.dataset.source;
                this.store.dispatch(actions[action](source));
            })
        })

        if (this.currentChannel) {
            let currentChannelButton = document.querySelector(`[data-source=${this.currentChannel}]`);
            currentChannelButton.classList.add('active');
        }
    }

    render() {
        let state = this.store.getState();

        if (state.appIsRunning && !state.channels) {
            let runAppCode = event => require.ensure([], require => require('./runApp.js').default(this.store));

            runAppCode();

            let apiDecorator = new ApiDecorator(new ArticlesApi(), apiConfig.apiKey);
            this.proxy = new Proxy(apiDecorator);
        }

        if (!state.currentChannel) {
            this.renderView();
        } else {
            this.currentChannel = state.currentChannel;
            let news = this.proxy.getData(state.currentChannel)
                .then(data => {
                    this.store.dispatch(actions.getNewsSuccess(data));
                })
        }
    }
};
