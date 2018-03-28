class TodoFormController {
    constructor(TodoService, EventEmitter) {
        'ngInject';
        this.todoService = TodoService;
        this.EventEmitter = EventEmitter;
    }

    onSubmit() {
        if (this.todo) {
            if (!this.todo.creationDate) {
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
            } else {
                this.todoService.updateTodo({
                    _id: this.todo._id,
                    text: this.todo.text,
                    updateDate: new Date(),
                    isDone: this.todo.isDone
                })
                    .then(response => {
                        if (response.status === 200) {
                            this.onUpdateTodo(
                                this.EventEmitter(response.data)
                            );
                        }
                        
                    })
            }
        }
    }
}

TodoFormController.$inject = ['TodoService', 'EventEmitter'];

export default TodoFormController;
