QuizListModule.controller('quizList', quizListController);

function quizListController($scope, $http, $state , QuizService){

    console.log("quizListController");
    //Create POST:
    QuizService.getAll().then(function (response) {
        $scope.quizes = response;
    }.bind(this));

}
