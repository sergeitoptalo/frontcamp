export const getNewTodosTemplate = () =>
    `
    <div class="filters-section">
        <div class="days-ago-filter">
            <span>Added</span>
            <input type="number" class="days-ago-input"/>
            <span>days ago</span>
        </div>
    </div>
    <ul>
        <li ng-repeat="todo in $ctrl.todos | filterNewTodos">
            <div>
                <button ng-click="$parent.$ctrl.switchTodoToDone(todo)">-</button>
                <button>{{todo.text}}</button>
            </div>
            <div>{{todo.creationDate | date: "dd.MM.yyyy 'at' HH:mm"}}</div>
        </li>
    </ul>
`
