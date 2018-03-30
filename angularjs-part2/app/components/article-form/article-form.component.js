import controller from './article-form.controller';
import { getArticleFormTemplate } from './article-form.template.js';

const ArticleFormComponent = {
    bindings: {
        article: '<',
        onAddArticle: '&',
        onUpdateArticles: '&'
    },
    controller,
    template: getArticleFormTemplate()
};

export default ArticleFormComponent;
