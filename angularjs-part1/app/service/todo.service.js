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
}

TodoService.$inject = ['$http', '$q'];

export default TodoService;
