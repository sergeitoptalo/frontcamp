export function DoneTodosController ($scope, factory) {
    $scope.doneTodos = factory.getDoneTasks();
    $scope.switchTaskToNew = (todo) => {
        factory.switchTaskToNew(todo);
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
