clasificadorModule.service('ClasificadorService', function($http) {
    this.getAll = function () {
        return $http.get('/api/clasificadores').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }


    this.find = function (id) {
        console.log("id = " + id);
        return $http.get('/api/clasificadores/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.delete = function (id) {
        return $http.delete('/api/clasificadores/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.edit = function (clasificador) {
        return $http.put('/api/clasificadores/', clasificador).then(function(response){
            var result = [];
            result = response.data;
            console.log(result);
            return result;
        });
    }



    this.create = function(clasificador){
        return $http.post('/api/clasificadores', clasificador).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

});
