export const getArticlesListTemplate = () =>
    `
    <h3>Articles</h3>
    <ul class="articles-list">
        <li ng-repeat="article in $ctrl.articles | pagination:$ctrl.current:$ctrl.itemsOnPage" class="article-item">
            <a href="#!/articles/{{article._id}}">{{article.articleTitle}}</a>
        </li>
        
    </ul>
    <div>
    <a href="#!/articles/page/{{$ctrl.current - 1}}" ng-show="$ctrl.current !== 1">Prev</a>
        <span>Page</span>
        <input type="number" ng-model="$ctrl.current" ng-change="$ctrl.detectCurrentPage()"/>
        <span>from</span>
        <span>{{$ctrl.pages}}</span>
        <a href="#!/articles/page/{{$ctrl.current + 1}}" ng-show="$ctrl.current < $ctrl.pages">Next</a>
    </div>
`
