QuizTakeModule.controller('quizTake', quizTakeController);

function quizTakeController($scope, $http, $state, $stateParams , QuizService){
   console.log("quizTakeController");
   $scope.quiz = {};
   $scope.answers = [];
   $scope.quizId = $stateParams.id;

}
