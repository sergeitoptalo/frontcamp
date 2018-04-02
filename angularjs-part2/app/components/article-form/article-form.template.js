export const getArticleFormTemplate = () =>
`
    <form name="articleForm" ng-submit="$ctrl.onSubmit();" class="article-form">
        <label>Title
            <input type="text" ng-model="$ctrl.article.articleTitle" required name="articleTitle" ng-change="$ctrl.clearSuccessMessage()"/>
        </label>
        <textarea type="text" ng-model="$ctrl.article.articleText" required article-min-length name="articleText" ng-change="$ctrl.clearSuccessMessage()"></textarea>
        <button type="submit" class="submit-button" ng-disabled="articleForm.articleText.$error.articleMinLength">Ok</button>
    </form>
    <div ng-show="articleForm.articleText.$error.articleMinLength && articleForm.articleText.$touched && !articleForm.articleText.$pristine && !$ctrl.submitted" class="validation-message">
        The minimum length of an article should be 10 symbols
    </div>
    <div class="message-success">
        {{$ctrl.successMessage}}
    </div>
    <a href="#!/page/1" class="close-form-button">&#10539;</a>
`
