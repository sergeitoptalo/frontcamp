export function NewTodosController ($scope, factory) {
    $scope.todos = factory.getTasks();
    $scope.doneTodos = factory.getDoneTasks();
    $scope.switchTaskToDone = (todo) => {
        factory.switchTaskToDone(todo);
    }
    /* this.todos = [
        {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }
    ]; */
}
