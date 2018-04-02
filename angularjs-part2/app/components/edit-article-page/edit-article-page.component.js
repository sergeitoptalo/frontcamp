import controller from './edit-article-page.controller';
import { getEditArticlePageTemplate } from './edit-article-page.template.js';

const EditArticlePageComponent = {
    bindings: {
        articleData: '<'
    },
    controller,
    template: getEditArticlePageTemplate()
};

export default EditArticlePageComponent;
