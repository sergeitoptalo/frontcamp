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

        this.todoService.getTodos()
            .then(response => this.todos = response.data);
        /*   this.todoService.getTodos().then(response => {
              console.log(response);
              this.todos = response
          }); */
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

    addTodo({ todo }) {
        if (!todo) return;
        this.todos.unshift(todo);
        console.log(this.todos);
        /* this.newTodo = {
            title: '',
            selected: false
        }; */
    }

}

MainPageController.$inject = ['TodoService'];

export default MainPageController;
