QuizModule.directive("quizItems", function() {
    return {
        scope: {
            items:"=items",
            answers:"=answers"
        },
        templateUrl: '/app/components/quiz/directives/quiz-items/quiz-items.html',
        controller: function($scope){

        },

       link: function(scope, elem, attrs, controller){

       }


    };
});
