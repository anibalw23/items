QuizModule.directive("quiz", function() {
    return {
        scope: {
            quizId:"=quizId",
            score:"=score",
            answers:"=answers",
            shuffleQuestions: "=shuffleQuestions",
            showPager: "=showPager",
            allowBack: "=allowBack",
            autoMove: "=autoMove"
        },
        templateUrl: '/app/components/quiz/directives/quiz/quiz.html',
        controller: function($scope, QuizService){
            $scope.quiz = {};
            var vm = this;
            $scope.model = {
              awesome: true
            };
            $scope.fields = [];
            /*$scope.fields.push(
                {
                  key: 'text',
                  type: 'input',
                  templateOptions: {
                      label: 'Text',
                      placeholder: 'Formly is terrific!'
                  }
                }
            );*/

            /*$scope.fields = [
                {
                  key: 'text',
                  type: 'input',
                  templateOptions: {
                      label: 'Text',
                      placeholder: 'Formly is terrific!'
                  }
                }

            ];*/







            /*Get the Quiz*/
            $scope.getQuiz = function(quizId){
                console.log("getQuiz()" + quizId );
                QuizService.find(quizId).then(function (response) {
                    $scope.quiz = response;
                    angular.forEach($scope.quiz.items, function(item, key){
                        if(item.tipo_pregunta == "seleccion_multiple"){
                           $scope.fields.push(
                                {
                                  key: 'answers' + key,
                                  type: 'multiCheckbox',
                                  templateOptions: {
                                      label: item.titulo,
                                      options:item.choices,
                                      valueProp: '_id',
                                      labelProp: 'titulo'
                                  }
                                }
                            );

                        }

                    });

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


        },

       link: function(scope, elem, attrs){

       }


    };
});
