import NewsContainer from '../containers/newsContainer';
import { renderListItem } from '../containers/listItem';
import { renderArticle } from '../templates/article.template';

export default class NewsChannel extends NewsContainer {
    constructor({ title, source } = channelConfig) {
        super();
        this.title = title;
        this.source = source;
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

    renderNews(data, container) {
        let pageMarkup = ``;
        data.forEach(article => {
            pageMarkup += renderArticle(article);
        });
        container.innerHTML = pageMarkup;
    }

    render(container) {
        let listItem = renderListItem(container);
        this.renderChannelButton(listItem);
    }
}
