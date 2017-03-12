myApp.service('ProyectoService', function($http) {
    this.getAll = function () {
        return $http.get('/api/proyectos').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.find = function (id) {
        return $http.get('/api/proyectos/' + id).then(function(response){
            var result = [];
            result = response.data;
            console.log(result);
            return result;
        });
    }

    this.delete = function (id) {
        return $http.delete('/api/proyectos/' + id).then(function(response){
            var result = [];
            result = response.data;
            console.log(result);
            return result;
        });
    }

    this.edit = function (proyecto) {
        return $http.put('/api/proyectos/', proyecto).then(function(response){
            var result = [];
            result = response.data;
            console.log(result);
            return result;
        });
    }



    this.create = function(proyecto){
        return $http.post('/api/proyectos', proyecto).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

});
