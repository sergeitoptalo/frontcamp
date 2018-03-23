class DoneTodosController {
    constructor(EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
    }

    switchTodoToNew(todo) {
        todo.isDone = false;

        this.onChangeTodoState(
            this.EventEmitter(todo)
        )
    }

    $onChanges(changes) {
        if (changes.todo) {
            this.todo = Object.assign({}, this.todo);
        }
    }
    onSubmit() {
        if (!this.todo.title) return;
        // with EventEmitter wrapper
        this.onChangeTodoState(
            this.EventEmitter({
                todo: this.todo
            })
        );
        // without EventEmitter wrapper
        /*this.onAddTodo({
          $event: {
            todo: this.todo
          }
        });*/
    }
}

DoneTodosController.$inject = ['EventEmitter'];

export default DoneTodosController;
