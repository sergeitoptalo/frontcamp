export const getTodoFormTemplate = () =>
    `
    <form name="todoForm" ng-submit="$ctrl.onSubmit();">
      <input type="text" ng-model="$ctrl.todo.text" required todo-min-length name="todoText">
      <button type="submit" class="submit-button" ng-disabled="todoForm.todoText.$error.todoMinLength">Ok</button>
    </form>
    <div ng-show="todoForm.todoText.$error.todoMinLength && todoForm.todoText.$touched && !todoForm.todoText.$pristine" class="validation-message">
        The minimum length of a task should be 10 symbols
    </div>
    <a href="#!/dashboard" class="close-form-button">&#10539;</a>
`
