QuizDetailsModule.controller('quizDetails', quizDetailsController);

function quizDetailsController($scope, $http, $state, $stateParams , QuizService){
   console.log("quizDetailsController");
   $scope.quiz = {};
   $scope.quizId = $stateParams.id;

   QuizService.find($scope.quizId).then(function (response) {
      $scope.quiz = response;
      return $scope.quiz;
    }.bind(this));

}
