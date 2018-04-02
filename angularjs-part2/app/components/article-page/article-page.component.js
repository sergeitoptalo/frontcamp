import controller from './article-page.controller';
import { getArticlePageTemplate } from './article-page.template.js';

const ArticlePageComponent = {
    bindings: {
        articleData: '<'
    },
    controller,
    template: getArticlePageTemplate()
};

export default ArticlePageComponent;
