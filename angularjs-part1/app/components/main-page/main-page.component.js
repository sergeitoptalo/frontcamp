import controller from './main-page.controller';

const MainPageComponent = { 
  bindings: {
    todoData: '<'
  },
  controller,
  template: `
    <div class="todo">
      <todo-form
        todo="$ctrl.newTodo"
        on-add-todo="$ctrl.addTodo($event);">
      </todo-form>
      <new-todos
        todos="$ctrl.todos"></new-todos>
    </div>
  `
};

export default MainPageComponent;
