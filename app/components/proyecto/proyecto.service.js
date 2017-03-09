myApp.service('ProyectoService', function($http) {
    this.getAll = function () {
        return $http.get('/api/proyectos').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.create = function(proyecto){
        return $http.post('/api/proyectos/create', proyecto).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });

    }

});
