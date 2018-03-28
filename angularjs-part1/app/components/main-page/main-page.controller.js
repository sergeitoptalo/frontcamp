class MainPageController {
    constructor(TodoService) {
        this.todoService = TodoService;
        this.todos = [];
        this.newTodos = [];
        this.doneTodos = [];
        window.onbeforeunload = this.$onExit;
    }

    $onInit() {
        this.updateTodos();
    }

    updateTodos() {
        this.todoService.getTodos()
            .then(response => this.todos = response.data.reverse());
    }

    changeTodoState(changedTodo) {
        this.todoService.updateTodo({
            _id: changedTodo._id,
            isDone: changedTodo.isDone,
            doneDate: changedTodo.doneDate
        })
    }

    $onExit() {
        alert('bye');
    };

    addTodo(message) {
        this.updateTodos();
    }
}

MainPageController.$inject = ['TodoService'];

export default MainPageController;
