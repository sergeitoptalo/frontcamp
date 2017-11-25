import { articlesApi } from '../api/articlesApi';

export default class newsContainer {
    constructor() {
        this.apiKey = '1de7e5223cf14337a6dd0e1330b80c7f';
    }
    
    getArticles(source, section) {
        let articles = articlesApi(source, this.apiKey)
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
