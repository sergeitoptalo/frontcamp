class MainPageController {
    constructor(ArticleService) {
        this.articleService = ArticleService;
        this.articles = [];
        this.current;
    }

    $onInit(init) {
        this.updateArticles();
    }

    updateArticles() {
        this.articleService.getArticles()
            .then(response => {
                this.articles = response.data.reverse();
            })
    }

    changeTodoState(changedTodo) {
        this.todoService.updateTodo({
            _id: changedTodo._id,
            isDone: changedTodo.isDone,
            doneDate: changedTodo.doneDate
        })
    }

    $onChanges(changes) {
        if (changes.current) {
            this.current = Number(this.current);
        }
    }

    $onExit() {
        alert('bye');
    };

    addTodo(message) {
        this.updateTodos();
    }
}

MainPageController.$inject = ['ArticleService'];

export default MainPageController;
