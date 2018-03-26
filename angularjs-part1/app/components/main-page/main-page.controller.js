class MainPageController {
    constructor(TodoService) {
        this.todoService = TodoService;
        this.todos = [];
        this.newTodos = [];
        this.doneTodos = [];
        window.onbeforeunload = this.$onExit;
    }

    $onInit() {
        /* this.newTodo = {
            title: '',
            selected: false
        }; */

        this.updateTodos();

        /* this.todoService.getTodos()
            .then(response => this.todos = response.data); */

        /*   this.todoService.getTodos().then(response => {
              console.log(response);
              this.todos = response
          }); */
    }

    updateTodos() {
        this.todoService.getTodos()
            .then(response => this.todos = response.data);
    }

    changeTodoState(changedTodo) {
        //let changedTodoIndex = this.todos.findIndex(todo => todo._id === changedTodo._id);
       // this.todos[changedTodoIndex] = changedTodo;
        //changedTodo.isDone = !changedTodo.isDone;
    }

    switchTodoToDone(todo) {
        todo.isDone = true;
    }

    /* $onChanges(changes) {
        if (changes.todoData) {
            this.todos = Object.assign({}, this.todoData);
        }
    } */

    $onExit () {
        alert('bye');
      };

    addTodo(message) {
       // this.todos.unshift(todo);
       // console.log(this.todos);
       // this.todos.push({text: todo.text, creationDate: new Date()});
       this.updateTodos();
    }

}

MainPageController.$inject = ['TodoService'];

export default MainPageController;
