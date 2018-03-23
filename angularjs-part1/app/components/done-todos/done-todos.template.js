export const getDoneTodosTemplate = () =>
`        
<div class="filters-section">
        <div class="days-ago-filter">
            <span>Done</span>
            <input type="number" class="days-ago-input"/>
            <span>days ago</span>
        </div>
    </div>
<ul>
            <li ng-repeat="todo in $ctrl.todos | filterDoneTodos">
                <div>
                    <button ng-click="$ctrl.switchTodoToNew(todo)">v</button> 
                    <button>{{todo.text}}</button>
                </div>
                <div>{{todo.creationDate | date: 'dd.MM.yyyy'}}</div>
                <div>{{todo.doneDate | date: "dd.MM.yyyy 'at' HH:mm"}}</div>
            </li>
        </ul>
    `
