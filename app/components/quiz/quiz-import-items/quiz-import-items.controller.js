QuizImportItemsModule.controller('quizImportItems', quizImportItemsController);

function quizImportItemsController($scope, $http, $state , QuizService){
    $scope.checkboxItems = [];

     $scope.mapResponse = function(){
       console.log("mapResponse") ;
     };


     $scope.changeItem = function(itemId) {
         console.log("ItemId = " +itemId );
        /*if(itemId !=""){
            $scope.checkboxItemsOut.push(itemId);
        }
        else{ //Remueve el elemento vacio
            angular.forEach($scope.checkboxItemsOut, function(val, key){
              if(val == ""){
                  $scope.checkboxItemsOut.splice(key,1);
              }
            });
        }
        console.log($scope.checkboxItemsOut);*/
    };

}
