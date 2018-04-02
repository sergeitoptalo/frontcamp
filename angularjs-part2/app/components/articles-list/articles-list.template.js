export const getArticlesListTemplate = () =>
`
    <ul class="articles-list">
        <li ng-repeat="article in $ctrl.articles | pagination:$ctrl.current:$ctrl.itemsOnPage" class="article-item">
            <a href="#!/articles/{{article._id}}">{{article.articleTitle}}</a>
            <div class="date">
                {{article.creationDate | date: "dd.MM.yyyy"}}
                <span ng-show="article.updateDate" class="updated-date">
                    <span>Updated:</span> {{article.updateDate | date: "dd.MM.yyyy"}}
                </span>
            </div>
        </li>
    </ul>
    <div ng-show="$ctrl.current <= $ctrl.pages" class="pagination-container">
        <a href="#!/articles/page/{{$ctrl.current - 1}}" ng-show="$ctrl.current !== 1" class="previous-page-button">Prev</a>
        <span>Page</span>
        <!--<input type="number" ng-model="$ctrl.current" ng-change="$ctrl.detectCurrentPage()"/>-->
        <span class="page-number">{{$ctrl.current}}</span>
        <span>from</span>
        <span>{{$ctrl.pages}}</span>
        <a href="#!/articles/page/{{$ctrl.current + 1}}" ng-show="$ctrl.current < $ctrl.pages" class="next-page-button">Next</a>
    </div>
`
