import controller from './article-page.controller';

const ArticlePageComponent = {
    bindings: {
        articleData: '<'
    },
    controller,
    template: `
        <div class="edit-article-page">
            <h3>{{$ctrl.articleData.articleTitle}}</h3>
            <p>{{$ctrl.articleData.articleText}}</p>
            <a href="#!/edit/{{$ctrl.articleData._id}}">edit</a>
        </div>
    `
};

export default ArticlePageComponent;
