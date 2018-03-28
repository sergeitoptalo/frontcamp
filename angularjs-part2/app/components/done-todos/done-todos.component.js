import controller from './done-todos.controller';
import { getDoneTodosTemplate } from './done-todos.template.js';

const DoneTodosComponent = {
    bindings: {
        todos: '<',
        onChangeTodoState: '&'
    },
    controller,
    template: getDoneTodosTemplate()
};

export default DoneTodosComponent;
