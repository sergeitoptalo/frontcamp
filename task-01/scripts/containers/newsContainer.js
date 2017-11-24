import { articlesApi } from '../api/articlesApi';

export default class newsContainer {
    getArticles(key, section) {
        let articles = articlesApi(key)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let container = this.getArticlesContainer();
            section.renderNews(data.articles, container);
        })
    }

    getArticlesContainer() {
        return document.querySelector('#news-container');
    }
}
