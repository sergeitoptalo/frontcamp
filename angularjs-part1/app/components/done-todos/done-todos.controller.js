class DoneTodosController {
    constructor(EventEmitter) {
        'ngInject';
        this.EventEmitter = EventEmitter;
        this.daysAgo = '';
        this.sortingReverse = false;
        this.sortingPropertyName = '';
    }

    switchTodoToNew(todo) {
        todo.isDone = false;
        todo.doneDate = '';

        this.onChangeTodoState(
            this.EventEmitter(todo)
        )
    }

    validateDaysAgoInput() {
        const validationRegExp = /\d+$/
        if (!validationRegExp.test(this.daysAgo)) {
            this.daysAgo = '';
        }
    }

    incrementDaysAgo() {
        this.daysAgo === '' ? this.daysAgo = 0 : this.daysAgo = Number(this.daysAgo) + 1;
    }

    decrementDaysAgo() {
        this.daysAgo !== 0 ? this.daysAgo = Number(this.daysAgo) - 1 : this.daysAgo = '';
    }

    clearDaysAgoFilter() {
        this.daysAgo = '';
    }

    sortBy(sortingPropertyName) {
        this.sortingReverse = (this.sortingPropertyName === sortingPropertyName) ? !this.sortingReverse : false;
        this.sortingPropertyName = sortingPropertyName;
    }

    clearSortByFilter() {
        this.sortingPropertyName = '';
        this.sortingReverse = false;
    }

    $onChanges(changes) {
        if (changes.todo) {
            this.todo = Object.assign({}, this.todo);
        }
    }
    onSubmit() {
        if (!this.todo.title) return;
        this.onChangeTodoState(
            this.EventEmitter({
                todo: this.todo
            })
        );
    }
}

DoneTodosController.$inject = ['EventEmitter'];

export default DoneTodosController;
