class MainPageController {
    constructor(TodoService) {
        this.todoService = TodoService;
        this.todos = [];
        this.newTodos = [];
        this.doneTodos = [];
    }

    $onInit() {
        this.newTodo = {
            title: '',
            selected: false
        };
        
        this.todoService.getTodos()
        .then(response => this.todos = response.data);
      /*   this.todoService.getTodos().then(response => {
            console.log(response);
            this.todos = response
        }); */
    }

    $onChanges(changes) {
        if (changes.todoData) {
            this.todos = Object.assign({}, this.todoData);
        }
    }

    addTodo({ todo }) {
        if (!todo) return;
        this.todos.unshift(todo);
        console.log(this.todos);
        this.newTodo = {
            title: '',
            selected: false
        };
    }
}

MainPageController.$inject = ['TodoService'];

export default MainPageController;
