QuizResponseModule.service('QuizResponseService', function($http) {
    this.getAll = function () {
        return $http.get('/api/quizresponses').then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }


    this.getByQuizId = function (id) {
      return $http.post('/api/quizresponsesByQuizId/', {params: { quizId: id }} ).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });

    }



    this.find = function (id) {
        return $http.get('/api/quizresponses/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.delete = function (id) {
        return $http.delete('/api/quizresponses/' + id).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

    this.edit = function (answer) {
        return $http.put('/api/quizresponses/', answer).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }



    this.create = function(answer){
        return $http.post('/api/quizresponses', answer).then(function(response){
            var result = [];
            result = response.data;
            return result;
        });
    }

});
