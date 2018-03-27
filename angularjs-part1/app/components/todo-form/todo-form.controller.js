class TodoFormController {
    constructor(TodoService, EventEmitter) {
        'ngInject';
        this.todoService = TodoService;
        this.EventEmitter = EventEmitter;
    }
   /*  $onChanges(changes) {
        if (changes.todo) {
            this.todo.text = this.todo.text;
        }
    } */
    onSubmit() {
        if (!this.todo.text) return;
        this.todoService.addTodo({
            text: this.todo.text,
            creationDate: new Date(),
            isDone: false
        })
            .then(response => {
                if (response.status === 200) {
                    this.onAddTodo(
                        this.EventEmitter(response.data)
                    );
                    this.todo.text = '';
                }
            })
        // with EventEmitter wrapper
        /* this.onAddTodo(
            this.EventEmitter({
                todo: this.todo
            })
        ); */
        // without EventEmitter wrapper
        /*this.onAddTodo({
          $event: {
            todo: this.todo
          }
        });*/
    }
}

TodoFormController.$inject = ['TodoService', 'EventEmitter'];

export default TodoFormController;
