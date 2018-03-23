class NewTodosController {
    constructor(EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
    }

    switchTodoToDone(todo) {
        todo.isDone = true;
        todo.doneDate = new Date();
        this.onChangeTodoState(
            this.EventEmitter(todo._id)
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

NewTodosController.$inject = ['EventEmitter'];

export default NewTodosController;
