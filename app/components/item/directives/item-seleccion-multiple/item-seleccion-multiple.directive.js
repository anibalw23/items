ItemModule.directive("itemSeleccionMultiple", function() {
    return {
        scope: {
            item:"=item",
            index: "=index",
            choices: "=choices",
            choiceType: "=choiceType",
            answers : "=answers"
        },
        templateUrl: '/app/components/item/directives/item-seleccion-multiple/item-seleccion-multiple.html',
        controller: function($scope){
            $scope.selectedChoices = [];

            $scope.changeCheckboxAnswer = function(item, choice, isChecked, index){
                if($scope.answers != undefined  && $scope.answers !=  null){
                      if(!isChecked){

                        var isRepeated = false;
                        angular.forEach($scope.answers.responses, function(value, key){
                            if(value.itemId == choice._id ){
                                isRepeated = true;
                            }
                        });
                        if(isRepeated == false){
                            $scope.answers.responses.push( // inserta en arreglo de respuestas
                                {
                                  itemId: item._id,
                                  itemType:item.tipo_pregunta,
                                  itemText: item.titulo,
                                  value: {choiceId:choice._id, choiceValue: choice.titulo},
                                }
                            );

                        }
                    }
                    else{
                       var indexResult = $scope.answers.responses.map(
                           function (response) { return response.itemId; }
                       ).indexOf(item._id);
                        $scope.answers.responses.splice(indexResult, 1);
                        //var indexResult =  $scope.answers.responses.find(x => x.itemId === item._id);

                    }

                }

            }
        },

       link: function(scope, elem, attrs){

       }


    };
});
