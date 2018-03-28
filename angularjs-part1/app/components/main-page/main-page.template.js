export const getMainPageTemplate = () =>
    `
    <div class="app-container"> 
        <div class="column">
            <new-todos todos="$ctrl.todos" on-change-todo-state="$ctrl.changeTodoState($event)"></new-todos>
        </div>
        <div class="column">
            <done-todos todos="$ctrl.todos" on-change-todo-state="$ctrl.changeTodoState($event)"></done-todos>
        </div>
    </div>
    <div ui-view class="output"></div>
`
