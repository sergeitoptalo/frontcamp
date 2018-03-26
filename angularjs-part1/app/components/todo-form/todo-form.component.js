import controller from './todo-form.controller';

const TodoFormComponent = {
  bindings: {
    todo: '<',
    onAddTodo: '&'
  },
  controller,
  template: `
    <form name="todoForm" ng-submit="$ctrl.onSubmit();">
      <input type="text" ng-model="$ctrl.todo.text">
      <button type="submit">Submit</button>
    </form>
    <a href="#!/dashboard">Close</a>
  `
};

export default TodoFormComponent;
