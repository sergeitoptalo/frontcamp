import controller from './edit-todo-page.controller';

const EditTodoPageComponent = {
    bindings: {
        todoData: '<'
    },
    controller,
    template: `
        <div class="edit-todo-page">
            <h3>Edit task</h3>
            <todo-form todo="$ctrl.todoData" on-update-todo="$parent.$parent.$ctrl.updateTodos($event)"></todo-form>
        </div>
    `
};

export default EditTodoPageComponent;
