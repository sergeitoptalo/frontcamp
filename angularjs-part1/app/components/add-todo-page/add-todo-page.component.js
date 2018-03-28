//import controller from './todo-form.controller';

const AddTodoPageComponent = {
    template: `
        <div class="add-todo-page">
            <h3>Add task</h3>
            <todo-form on-add-todo="$parent.$parent.$ctrl.addTodo($event)"></todo-form>
        </div>
    `
};

export default AddTodoPageComponent;
