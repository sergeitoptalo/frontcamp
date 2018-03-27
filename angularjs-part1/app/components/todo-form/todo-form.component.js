import controller from './todo-form.controller';

const TodoFormComponent = {
  bindings: {
    todo: '<',
    onAddTodo: '&'
  },
  controller,
  template: `
    <form name="todoForm" ng-submit="$ctrl.onSubmit();">
      <input type="text" ng-model="$ctrl.todo.text" required todo-min-length name="todoText">
      <button type="submit" ng-disabled="todominlength">Submit</button>
    </form>
    <span ng-show="todoForm.todoText.$error.todoMinLength">This username is already taken!</span>
    <a href="#!/dashboard">Close</a>
  `
};

export default TodoFormComponent;
