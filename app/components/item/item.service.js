myApp.service('ItemService', function($http) {
    this.getAll = function () {
        return $http.get('/api/items').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.find = function (id) {
        return $http.get('/api/items/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.delete = function (id) {
        return $http.delete('/api/items/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.edit = function (item) {
        return $http.put('/api/items/', item).then(function(response){
            var result = [];
            result = response.data;
            console.log(result);
            return result;
        });
    }



    this.create = function(item){
        return $http.post('/api/items', item).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }


    this.findByClasificators = function(clasificadoresIds){
        console.log("findByClasificators item.service");
        console.log(clasificadoresIds);
        return $http.post('/api/itemsByClasificadores/', {params: { clasificadoresIds: clasificadoresIds }} ).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });

    }




});
