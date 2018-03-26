import controller from './edit-todo-page.controller';

const EditTodoPageComponent = {
    /*  bindings: {
       todo: '<',
       onAddTodo: '&'
     }, */
     controller,
     template: `
     <h3>Edit todo</h3>
       <todo-form on-edit-todo="$parent.$parent.$ctrl.editTodo($event)"></todo-form>
     `
   };
   
   export default EditTodoPageComponent;
