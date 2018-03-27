class EditTodoPageController {
    constructor(TodoService) {
        this.todoService = TodoService;
    }

    $onInit() {

        //this.todoService.getTodo();

    }

    $onChanges(changes) {
        if (changes.todo) {
            this.todo = Object.assign({}, this.todo);
        }

        if (changes.todoData) {
            this.todoData = this.todoData.data;
        }

    }



}

EditTodoPageController.$inject = ['TodoService'];

export default EditTodoPageController;
