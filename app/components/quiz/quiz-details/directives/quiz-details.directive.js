QuizDetailsModule.directive("quizDetails", function() {
    return {
        scope: {
            quiz:"=quiz",
        },
        templateUrl: '/app/components/quiz/quiz-details/directives/quiz-details.html',
        controller: function($scope){



        },

       link: function(scope, elem, attrs){

       }


    };
});
