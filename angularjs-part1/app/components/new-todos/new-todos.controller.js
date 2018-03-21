export function NewTodosController ($scope, factory, $filter) {
    $scope.todos = factory.getTasks();
    $scope.doneTodos = factory.getDoneTasks();
    //$scope.todos.forEach(todo => todo.date = $filter('date')(todo.date, 'dd'));
   // $scope.newTodosFilterByDays = () => (todos) => $filter($scope.todos, (todo) => $scope.newTodosFilterByDays === new Date().getDate() - new Date(todo.date).getDate());
    /*  if ($scope.newTodosFilterByDays) {
        $scope.todos = $filter($scope.todos, (todo) => $scope.newTodosFilterByDays === new Date().getDate() - new Date(todo.date).getDate())
    } */
    $scope.switchTaskToDone = (todo) => {
        factory.switchTaskToDone(todo);
    }
    $scope.clearFilterByDays = () => $scope.daysAgo = '';
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
