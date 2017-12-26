import BaseView from './baseView.js';
import { addChannelsListMarkup } from './channelsList.js';

export default class AppView extends BaseView {
    render(state) {
        return this.toHtml(
            `<div class="page-wrapper">
            <div id="root" class="root">
                <header class="${!state.appIsRunning ? `app-off `: ``}app-header">
                    <div class="header-logo">
                        News
                    </div>
                </header>
                <button id="run-app-button" class="${!state.appIsRunning ? `app-off `: ``}run-app-button" data-action="click: RunApp">Run App</button>
                <div id="channels-list-container" class="channels-list-container">
                 ${state.channels ? addChannelsListMarkup(state.channels) : ``}
                </div>
                <div>
                    <button id="choose-channel-button" class="${!state.appIsRunning ? `app-off `: ``}choose-channel-button" data-toggle-target="channels-list-container">Choose channel</button>
                </div>
                <div id="news-container" class="news-container"></div>
            </div>
            <footer class="page-footer">
                <p>
                    &copy; Powered by
                    <a href="https://newsapi.org" target="_blank">NewsAPI.org</a>
                </p>
            </footer>
        </div>`
        )
    }
}
