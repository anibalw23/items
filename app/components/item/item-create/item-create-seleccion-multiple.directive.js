ItemCreateModule.directive("seleccionMultiple", function() {
    return {
       // template : "<h1>Holamundo! </h1>",
        templateUrl: '/app/components/item/item-create/item-create-seleccion-multiple.html',
        controller: function($scope){
            $scope.choices = [];
            $scope.addNewChoice = function(){
                console.log("Add new Choice");
                var newItemNo = $scope.choices.length+1;
                $scope.choices.push({'id':'choice'+newItemNo});
            }
            $scope.removeChoice = function() {
                var lastItem = $scope.choices.length-1;
                $scope.choices.splice(lastItem);
             };



        },
        link: function ($scope, element, attrs) {
            element.bind('click', function () {
                console.log("Add click");
            });
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});
