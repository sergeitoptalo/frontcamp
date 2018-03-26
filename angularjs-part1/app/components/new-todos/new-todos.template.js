export const getNewTodosTemplate = () =>
    `
    <div class="filters-section">
        <div class="days-ago-filter-container">
            <div class="days-ago-filter">
                <span>Added</span>
                <input type="number" ng-model="$ctrl.daysAgo" class="days-ago-input"/>
                <span>days ago</span>
            </div>
            <div class="clear-days-ago-filter-container">
                <button ng-show="$ctrl.daysAgo !== ''" ng-click="$ctrl.clearDaysAgoFilter()">x</button>
            </div>
        </div>
    </div>
    <ul>
        <li ng-repeat="todo in $ctrl.todos | filterNewTodos | filterDaysAgo:$ctrl.daysAgo">
            <div>
                <button ng-click="$ctrl.switchTodoToDone(todo)">-</button>
                <a href="#!/edit/{{todo._id}}">{{todo.text}}</a>
            </div>
            <div>{{todo.creationDate | date: "dd.MM.yyyy 'at' HH:mm"}}</div>
        </li>
    </ul>
`
