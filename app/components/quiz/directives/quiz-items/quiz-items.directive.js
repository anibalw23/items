QuizModule.directive("quizItems", function() {
    return {
        scope: {
            items:"=items",
            answers:"=answers"
        },
        templateUrl: '/app/components/quiz/directives/quiz-items/quiz-items.html',
        controller: function($scope, QuizService){
            $scope.items = {};
            $scope.quiz = {};
            $scope.answers = [];
           /* $scope.getItems = function(quizId){
                console.log("getItems()" + quizId );
                QuizService.find(quizId).then(function (response) {
                    console.log(response);
                    $scope.quiz = response;
                    $scope.items = $scope.quiz.items;
                    return $scope.items;
                }.bind(this));
            } */


        },

       link: function(scope, elem, attrs, controller){

       }


    };
});
