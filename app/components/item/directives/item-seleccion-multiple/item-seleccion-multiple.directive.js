ItemModule.directive("itemSeleccionMultiple", function() {
    return {
        scope: {
            text:"=text",
            choices: "=choices",
            choiceType: "=choiceType",
            answers : "=answers"
        },
        templateUrl: '/app/components/item/directives/item-seleccion-multiple/item-seleccion-multiple.html',
        controller: function($scope){
            $scope.item = {};
            $scope.selectedChoices = [];
            $scope.addAnswer = function(choice, index){


                /*$scope.answers.push({
                    choiceId: choice._id,
                    answerText: choice.titulo,
                    isCorrect: choice.isCorrect
                });*/

               console.log("addAnswer()" + index);
           }
        },

       link: function(scope, elem, attrs){

       }


    };
});
