let BaseView = require ('./baseView.js');
/*import { addChannelsListMarkup } from './channelsList.js';
import { renderArticles } from './article.js'; */

class AppView extends BaseView {
    constructor(store) {
        super();
        this.store = store;
    }

    renderAppView(state) {
        
    }


    /* render({ appIsRunning, channels, articles } = state) {
        return this.toHtml(`
        <div class="page-wrapper">
            <div id="root" class="root">
                <header class="${!appIsRunning ? `app-off `: ``}app-header">
                    <div class="header-logo">
                        News
                    </div>
                </header>
                ${!appIsRunning 
                    ? `<button id="run-app-button" class="${!appIsRunning ? `app-off `: ``}run-app-button" data-action="click: RunApp">Run App</button>`
                    : ``
                }
                <div id="channels-list-container" class="channels-list-container">
                 ${channels ? addChannelsListMarkup(channels) : ``}
                </div>
                <div>
                    <button id="choose-channel-button" class="${!appIsRunning ? `app-off `: ``}choose-channel-button" data-toggle-target="channels-list-container">Choose channel</button>
                </div>
                ${articles 
                    ? `<div id="news-container" class="news-container">
                            ${renderArticles(articles)}
                    </div>`
                    : ``
                }
            </div>
            <footer class="page-footer">
                <p>
                    &copy; Powered by
                    <a href="https://newsapi.org" target="_blank">NewsAPI.org</a>
                </p>
            </footer>
        </div>`
        )
    } */
}

module.exports = AppView;
