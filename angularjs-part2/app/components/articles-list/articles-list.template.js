export const getArticlesListTemplate = () =>
    `
    <h3>Articles</h3>
    <ul class="articles-list">
        <li ng-repeat="article in $ctrl.articles" class="article-item">
            <a href="#!/{{article._id}}">{{article.articleTitle}}</a>
        </li>
    </ul>
`
