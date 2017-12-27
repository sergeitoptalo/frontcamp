let NewsContainer = require ('../containers/newsContainer.js');

class GetNews {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.newsContainer = new NewsContainer();
    }

    execute({ source } = actionData) {
        let _this = this;
        this.newsContainer.getArticles(source).then(articles => {
            _this.dispatcher.dispatch({
                actionType: 'get-news',
                articles: articles
            });
        })
    };
};

module.exports = GetNews;
