import controller from './edit-todo-page.controller';

const EditTodoPageComponent = {
    /*  bindings: {
       todo: '<',
       onAddTodo: '&'
     }, */
    bindings: {
        todoData: '<'
    },
    controller,
    template: `
     <h3>Edit todo</h3>
       <todo-form todo="$ctrl.todoData" on-edit-todo="$parent.$parent.$ctrl.editTodo($event)"></todo-form>
     `
};

export default EditTodoPageComponent;
