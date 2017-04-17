QuizCreateModule.controller('quizCreate', quizCreateController);

function quizCreateController($scope, $http, $state , QuizService){
    $scope.quiz = {};
    $scope.quiz.items = [];
    $scope.items = [];
    $scope.tipos_quiz =[
        {tipo:"Manual"},
        {tipo:"Aleatoria"},
        {tipo:"TRI"},
    ];



    //Create POST:
    $scope.create = function () {
        console.log("Creating Quiz...");

        console.log($scope.items);
        console.log($scope.quiz);
        QuizService.create($scope.quiz).then(function (response) {
             $scope.quizes = response;
             $state.go('quizes');
        }.bind(this));
    }

}
