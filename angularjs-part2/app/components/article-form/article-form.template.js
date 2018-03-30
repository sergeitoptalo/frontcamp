export const getArticleFormTemplate = () =>
    `
    <form name="articleForm" ng-submit="$ctrl.onSubmit();">
        <input type="text" ng-model="$ctrl.article.articleTitle" required name="articleTitle" />
      <textarea type="text" ng-model="$ctrl.article.articleText" required todo-min-length name="articleText"></textarea>
      <button type="submit" class="submit-button" ng-disabled="todoForm.todoText.$error.todoMinLength">Ok</button>
    </form>
    <div ng-show="articleForm.articleText.$error.todoMinLength && articleForm.articleText.$touched && !articleForm.articleText.$pristine" class="validation-message">
        The minimum length of a task should be 10 symbols
    </div>
    <a href="#!/dashboard" class="close-form-button">&#10539;</a>
`
