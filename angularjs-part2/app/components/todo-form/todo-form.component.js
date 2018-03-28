import controller from './todo-form.controller';
import { getTodoFormTemplate } from './todo-form.template.js';

const TodoFormComponent = {
    bindings: {
        todo: '<',
        onAddTodo: '&',
        onUpdateTodo: '&'
    },
    controller,
    template: getTodoFormTemplate()
};

export default TodoFormComponent;
