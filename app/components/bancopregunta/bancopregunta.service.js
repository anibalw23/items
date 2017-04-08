BancoPreguntaModule.service('BancoPreguntaService', function($http) {
    this.getAll = function () {
        return $http.get('/api/bancopreguntas').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }


    this.find = function (id) {
        return $http.get('/api/bancopreguntas/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.delete = function (id) {
        return $http.delete('/api/bancopreguntas/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.edit = function (bancopregunta) {
        return $http.put('/api/bancopreguntas/', bancopregunta).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }



    this.create = function(bancopregunta){
        return $http.post('/api/bancopreguntas', bancopregunta).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

});
