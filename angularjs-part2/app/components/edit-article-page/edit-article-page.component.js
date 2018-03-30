import controller from './edit-article-page.controller';

const EditArticlePageComponent = {
    bindings: {
        articleData: '<'
    },
    controller,
    template: `
        <div class="edit-article-page">
            <h3>Edit article</h3>
            <article-form article="$ctrl.articleData" on-update-article="$parent.$parent.$ctrl.updateArticles($event)"></article-form>
        </div>
    `
};

export default EditArticlePageComponent;
