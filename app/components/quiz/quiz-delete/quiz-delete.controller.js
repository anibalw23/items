QuizDeleteModule.controller('quizDelete', quizDeleteController);

function quizDeleteController($scope, $http, $state, $stateParams , QuizService){
   console.log("quizDeleteController");
   $scope.quiz = {};
   $scope.quizId = $stateParams.id;

    $scope.delete = function () {
       console.log("delete() ");
         QuizService.delete($stateParams.id).then(function (response) {
             $scope.response = response;
             $state.go('quizes');
        }.bind(this));
    }


}
