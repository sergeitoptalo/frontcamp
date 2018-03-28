class MainPageController {
    constructor(ArticleService) {
        this.articleService = ArticleService;
        this.articles = [];
        //this.newTodos = [];
        //this.doneTodos = [];
       // window.onbeforeunload = this.$onExit;
    }

    $onInit() {
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

    $onExit() {
        alert('bye');
    };

    addTodo(message) {
        this.updateTodos();
    }
}

MainPageController.$inject = ['ArticleService'];

export default MainPageController;
