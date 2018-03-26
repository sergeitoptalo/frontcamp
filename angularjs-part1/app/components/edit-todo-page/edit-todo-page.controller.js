class EditTodoPageController {
    constructor(TodoService) {
        this.todoService = TodoService;
    }

    $onInit() {

        this.todoService.getTodo();
    }

}

EditTodoPageController.$inject = ['TodoService'];

export default EditTodoPageController;
