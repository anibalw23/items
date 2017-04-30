QuizResponseModule.controller('quizResponseList', quizResponseListController);

function quizResponseListController($scope, $http, $state, $stateParams , QuizResponseService){

    console.log("quizResponseListController" + $stateParams.id);
    var quizId = $stateParams.id;
    $scope.quizResponses = {};
    //Create POST:
    QuizResponseService.getByQuizId(quizId).then(function (response) {
        $scope.quizResponses = response;
        console.log(response[0]._id);
    }.bind(this));

}
