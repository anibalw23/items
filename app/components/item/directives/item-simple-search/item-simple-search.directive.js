ItemModule.directive("itemSimpleSearch", function() {
    return {
        scope: {
            result: '=itemData', // lista de items que cumplen el criterio de busqueda
            mapResponse: '&',
        },
        templateUrl: '/app/components/item/directives/item-simple-search/item-simple-search.html',
        controller: function($scope, ItemService){
           $scope.input_data = [];
           $scope.output_data = [];
           $scope.result_data = [];
           /*Funcion de Busqueda de Items*/
           $scope.buscar = function(data){
                var clasificatorIds = [];
                angular.forEach(data, function(v,k){
                    clasificatorIds.push(v.id);
                });
                ItemService.findByClasificators(clasificatorIds).then(function (response) {
                    $scope.result_data = response;
                    $scope.result = response;
                    $scope.mapResponse(); // Si existe una funcion para esto
                    return response;
                }.bind(this));
            }
        },

       link: function(scope, elem, attrs){
            console.log(" -- Element ready!");
       }


    };
});
