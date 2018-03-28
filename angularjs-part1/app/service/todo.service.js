class TodoService {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getTodos() {
        return this.$http.get('/api/todos');
    }

    getTodo(id) {
        return this.$http.get(`/api/edit/${id}`);
    }

    addTodo(todo) {
        return this.$http({ method: 'POST', url: '/api/add', data: todo });
    }

    updateTodo(todo) {
        return this.$http({ method: 'PUT', url: `/api/update/${todo._id}`, data: todo })
    }
}

TodoService.$inject = ['$http', '$q'];

export default TodoService;
