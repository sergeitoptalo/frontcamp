import controller from './articles-list.controller';
import { getArticlesListTemplate } from './articles-list.template.js';

const ArticlesListComponent = {
    bindings: {
        articles: '<',
        current: '<'
    },
    controller,
    template: getArticlesListTemplate()
};

export default ArticlesListComponent;
