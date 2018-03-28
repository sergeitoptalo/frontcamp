export const getNewTodosTemplate = () =>
    `
    <h3>New tasks</h3>
    <div class="filters-section">
        <div class="days-ago-filter-container">
            <ul class="days-ago-filter">
                <li>Added</li>
                <li>
                    <input type="text" ng-model="$ctrl.daysAgo" ng-change="$ctrl.validateDaysAgoInput()" class="days-ago-input"/>
                </li>
                <li class="days-ago-filter-controls">
                    <button ng-click="$ctrl.incrementDaysAgo()">&#9650;</button>
                    <button ng-click="$ctrl.decrementDaysAgo()" ng-disabled="!$ctrl.daysAgo">&#9660;</button>
                </li>
                <li>days ago</li>
                <li class="clear-days-ago-button">
                    <button ng-show="$ctrl.daysAgo !== ''" ng-click="$ctrl.clearDaysAgoFilter()">&#10539;</button>
                </li>
            </ul>
        </div>
        <div class="sorting-container">
            <button ng-show="$ctrl.sortingPropertyName" ng-click="$ctrl.clearSortByFilter()" class="clear-sorting-button">&#10539;</button>
            <button ng-click="$ctrl.sortBy('text')">
                <span ng-show="$ctrl.sortingPropertyName === 'text'" ng-class="{reverse: $ctrl.sortingReverse}" class="arrow-up-icon"></span>
                A-Z
            </button>
            <button ng-click="$ctrl.sortBy('creationDate')">
            <span ng-show="$ctrl.sortingPropertyName === 'creationDate'" ng-class="{reverse: $ctrl.sortingReverse}" class="arrow-up-icon"></span>
                Date
            </button>
        </div>
    </div>
    <ul class="new-todos-list">
        <li ng-repeat="todo in $ctrl.todos | filterNewTodos | filterDaysAgo:$ctrl.daysAgo | orderBy:$ctrl.sortingPropertyName:$ctrl.sortingReverse" class="todo-item">
            <div>
                <button ng-click="$ctrl.switchTodoToDone(todo)" class="checkbox-new"></button>
                <a href="#!/edit/{{todo._id}}">{{todo.text}}</a>
            </div>
            <div class="todo-date">{{todo.creationDate | date: "dd.MM.yyyy 'at' HH:mm"}}</div>
        </li>
    </ul>
`
