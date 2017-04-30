QuizTakeModule.controller('quizTake', quizTakeController);

function quizTakeController($scope, $http, $state, $stateParams , QuizService, QuizResponseService){
   console.log("quizTakeController");
   $scope.quiz = {};
   $scope.answers = [];
   $scope.quizId = $stateParams.id;


    $scope.QuizCompleted = function(){
        console.log("QuizCompleted()!");
        QuizResponseService.create($scope.answers).then(function (response) {
                    $scope.result_data = response;
                    $scope.result = response;
                    return response;
         }.bind(this));

    }


}
