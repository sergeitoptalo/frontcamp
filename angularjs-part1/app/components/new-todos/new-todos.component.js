import controller from './new-todos.controller';
import { getNewTodosTemplate } from './new-todos.template.js';

const NewTodosComponent = {
    bindings: {
        todos: '<',
        onChangeTodoState: '&'
        //switchTodoToDone: '&'
    },
    controller,
    template: getNewTodosTemplate()
};

export default NewTodosComponent;
