export const getArticlePageTemplate = () => `
    <div class="edit-article-page">
        <h3>{{$ctrl.articleData.articleTitle}}</h3>
        <a href="#!/edit/{{$ctrl.articleData._id}}" class="edit-article-button">edit</a>
        <div class="date">
            {{$ctrl.articleData.creationDate | date: "dd.MM.yyyy"}}
            <span ng-show="$ctrl.articleData.updateDate" class="updated-date">
                <span>Updated:</span> {{$ctrl.articleData.updateDate | date: "dd.MM.yyyy"}}
            </span>
        </div>
        <p>{{$ctrl.articleData.articleText}}</p>
    </div>
`
