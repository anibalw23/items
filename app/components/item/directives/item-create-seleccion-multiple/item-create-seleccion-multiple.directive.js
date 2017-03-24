ItemCreateModule.directive("seleccionMultiple", function() {
    return {
        scope: {
            model: '='
        },

        templateUrl: '/app/components/item/directives/item-create-seleccion-multiple/item-create-seleccion-multiple.html',
        controller: function($scope){
           // $scope.item = {};
           // $scope.item.choices = [];
           $scope.inputCounter = 0;
            $scope.model = [];
            $scope.addNewChoice = function(){
                var newItemNo = $scope.model.length+1;
                $scope.model.push({'id':newItemNo});
                $scope.inputCounter++;
            }
            $scope.removeChoice = function() {
                var lastItem = $scope.model.length-1;
                $scope.model.splice(lastItem);
                $scope.model.inputCounter--;
             };
        },

    };
});
