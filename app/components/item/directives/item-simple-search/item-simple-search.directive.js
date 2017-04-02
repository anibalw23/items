ItemModule.directive("itemSimpleSearch", function() {
    return {
        scope: {
            outputmodel: '=?'
        },

        templateUrl: '/app/components/item/directives/item-simple-search/item-simple-search.html',
        controller: function($scope){
            console.log("Item Simple Seacrh Directive!");
                $scope.input_data = [];
                $scope.output_data = [];
        },

    };
});
