import controller from './articles-list-page.controller';
import { getArticlesListPageTemplate } from './articles-list-page.template.js';

const ArticlesListPageComponent = {
    bindings: {
        articles: '<',
        pages: '<'
        //onChangeTodoState: '&'
    },
    controller,
    template: getArticlesListPageTemplate()
};

export default ArticlesListPageComponent;
