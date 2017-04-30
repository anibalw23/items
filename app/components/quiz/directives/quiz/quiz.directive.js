
QuizModule.directive("quiz", function() {
    return {
        scope: {
            quizId:"=quizId",
            userId :"=userId",
            score:"=score",
            answers:"=answers",
            onComplete:"&onComplete", //funcion que se ejecuta cuando se completa el quiz
            shuffleQuestions: "=shuffleQuestions",
            showPager: "=showPager",
            allowBack: "=allowBack",
            autoMove: "=autoMove"
        },
        templateUrl: '/app/components/quiz/directives/quiz/quiz.html',
        controller: function($scope, QuizService){
            $scope.quiz = {};
            $scope.formModel = {};
            $scope.fields = [];
            $scope.options = {};
            $scope.answers = {
              quizId: $scope.quizId,
              userId:$scope.userId,
              responses: [],
            };



            /*Get the Quiz*/
            $scope.getQuiz = function(quizId){
                QuizService.find(quizId).then(function (response) {
                    $scope.quiz = response;
                    return $scope.quiz;
                }.bind(this));


            }

            /*Start the Quiz*/
            $scope.start = function() {
                console.log("Start Quiz!");
                $scope.id = 0; //id the la pregunta actual
                $scope.quizOver = false;
                $scope.inProgress = true;
			};

             /*Start the Quiz*/
            $scope.end = function() {
                console.log("End Quiz!");
                $scope.id = 0; //id the la pregunta actual
                $scope.quizOver = true;
                $scope.inProgress = false;
			};
            function getRandomInt(min, max) {
              return Math.floor(Math.random() * (max - min)) + min;
            }

        },

       link: function(scope, elem, attrs){

       }


    };
});




QuizModule.config(function config(formlyConfigProvider) {

});
