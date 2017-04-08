ItemModule.directive("itemSimpleSearch", function() {
    return {
        scope: {
            //outputmodel: '=?',
            result: '=itemData',
        },
        templateUrl: '/app/components/item/directives/item-simple-search/item-simple-search.html',
        controller: function($scope, ItemService){
                $scope.input_data = [];
                $scope.output_data = [];
                $scope.result_data = [];
            $scope.buscar = function(data){
                var clasificatorIds = [];
                angular.forEach(data, function(v,k){
                    clasificatorIds.push(v.id);
                });
                ItemService.findByClasificators(clasificatorIds).then(function (response) {
                    $scope.result_data = response;
                    $scope.result = response;
                    //$scope.items = response;
                    return response;
                }.bind(this));
            }
        },

    };
});
