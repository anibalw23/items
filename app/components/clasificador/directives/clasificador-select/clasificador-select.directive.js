clasificadorModule.directive("clasificadorSelect", function() {
    return {
        scope: {
            outputmodel: '=?'
        },

        templateUrl: '/app/components/clasificador/directives/clasificador-select/clasificador-select.html',
        controller: function($scope, ClasificadorService){
                $scope.input_data = [];
                $scope.outputmodel = [];
                ClasificadorService.getAll().then(function (response) {
                     $scope.input_data = response;
                }.bind(this));

        },

    };
});
