import { renderArticles } from './article.js';

const getAppTemplate = ({ appIsRunning, channels, articles } = state) => 
    `
    <div class="page-wrapper">
        <div id="root" class="root">
            <header class="${appIsRunning ? '' : 'app-off '} app-header">
                <div class="header-logo">
                    News
                </div>
            </header>
            <button id="run-app-button" class="${appIsRunning ? '' : 'app-off '} run-app-button" data-action="click: runApp">Run App</button>
            <div id="channels-list-container" class="channels-list-container">
            ${channels ?
                `<ul>
                    ${channels.reduce((markup, { source, title } = channel) => markup + `<li><button data-action="click: getNews" data-source="${source}">${title}</button></li>`, ``)}
                </ul>`
                : ``
            }
            </div>
            ${appIsRunning ?
            `<div>
                <button class="choose-channel-button" data-toggle-target="channels-list-container">Choose channel</button>
            </div>` : ``}
            ${articles ?
                `<div id="news-container" class="news-container">
                    ${renderArticles(articles)}
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

export { getAppTemplate };
