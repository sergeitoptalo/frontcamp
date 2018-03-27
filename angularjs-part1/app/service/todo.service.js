class TodoService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    
    getTodos() {
        /* return this.$q.when([{
            title: 'Default',
            selected: false
        }]); */
        return this.$http.get('/api/todos');
    }

    getTodo(id) {
        return this.$http.get(`/api/edit/${id}`);
    }

    addTodo(todo) {
        return this.$http({ method: 'POST', url: '/api/add', data: todo});
    }
}

TodoService.$inject = ['$http', '$q'];

export default TodoService;
