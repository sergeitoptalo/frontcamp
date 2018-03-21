export function TodoFormController($routeParams, $scope, todosFactory) {
    $scope.submitTask = () => {
        if ($scope.taskText) {
            todosFactory.addTask({text: $scope.taskText, date: new Date()});
        }
    }
}
