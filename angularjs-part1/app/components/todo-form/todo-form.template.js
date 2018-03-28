export const getTodoFormTemplate = () =>
    `
    <form name="todoForm" ng-submit="$ctrl.onSubmit();">
      <input type="text" ng-model="$ctrl.todo.text" required todo-min-length name="todoText">
      <button type="submit" ng-disabled="todominlength" class="submit-button">Ok</button>
    </form>
    <span ng-show="todoForm.todoText.$error.todoMinLength && todoForm.todoText.$touched && !todoForm.todoText.$pristine">The minimum length of a task should be 20 symbols</span>
    <a href="#!/dashboard" class="close-form-button">&#10539;</a>
`
