QuizModule.service('QuizService', function($http) {
    this.getAll = function () {
        return $http.get('/api/quiz').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }


    this.find = function (id) {
        return $http.get('/api/quiz/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.delete = function (id) {
        return $http.delete('/api/quiz/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.edit = function (quiz) {
        return $http.put('/api/quiz/', quiz).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }



    this.create = function(quiz){
        return $http.post('/api/quiz', quiz).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

});
