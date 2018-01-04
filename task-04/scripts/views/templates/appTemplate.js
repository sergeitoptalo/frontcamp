import { renderArticles } from './article.js';

function getAppTemplate(state) {
    return `
    <div class="page-wrapper">
        <div id="root" class="root">
            <header class="${state.appIsRunning ? '' : 'app-off '} app-header">
                <div class="header-logo">
                    News
                </div>
            </header>
            <button id="run-app-button" class="${state.appIsRunning ? '' : 'app-off '} run-app-button" data-action="click: RUN_APP">Run App</button>
            <div id="channels-list-container" class="channels-list-container">
            ${state.channels ?
                `<ul>
                    ${state.channels.map(channel => `<li><button data-action="click: GET_NEWS" data-source="${channel.source}">${channel.title}</button></li>`)}
                </ul>`
                : ``
            }
            </div>
            ${state.appIsRunning ?
            `<div>
                <button class="choose-channel-button" data-toggle-target="channels-list-container">Choose channel</button>
            </div>` : ``}
            ${state.articles ?
                `<div id="news-container" class="news-container">
                    ${renderArticles(state.articles)}
                </div>` : ``
            }
            </div>
            <footer class="page-footer">
                <p>
                    &copy; Powered by
                    <a href="https://newsapi.org" target="_blank">NewsAPI.org</a>
                </p>
            </footer>
    </div>`
}

export { getAppTemplate };
