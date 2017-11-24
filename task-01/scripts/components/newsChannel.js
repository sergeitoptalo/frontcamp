import { renderListItem } from '../containers/listItem';
import { renderArticle } from '../templates/article.template';
//import { articleTemplate } from '../templates/article.template';

import NewsContainer from '../containers/newsContainer';

export default class NewsChannel extends NewsContainer {
    constructor(channelConfig) {
        super();
        this.title = channelConfig.title;
        this.source = channelConfig.source;
        this.newsSection = null;
    }

    getArticles() {
        super.getArticles(this.source, this);
    }

    renderChannelButton(container) {
        let buttonElement = document.createElement('button');
        let button = container.appendChild(buttonElement);
        let buttonText = document.createTextNode(this.title);
        button.appendChild(buttonText);
        button.addEventListener('click', () => { this.getArticles() });
    }

    render(container) {
        let listItem = renderListItem(container);
        this.renderChannelButton(listItem);
    }

    renderNews(data, container) {
        container.innerHTML = ``;
        data.forEach(article => {
            container.innerHTML += renderArticle(article);
        })
    }
}
