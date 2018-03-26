//import controller from './todo-form.controller';

const AddTodoPageComponent = {
    template: `
        <h3>Add todo</h3>
        <todo-form on-add-todo="$parent.$parent.$ctrl.addTodo($event)"></todo-form>
    `
};

export default AddTodoPageComponent;
