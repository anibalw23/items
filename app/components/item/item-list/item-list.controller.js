myApp.controller('itemList', ItemListController);

function ItemListController($scope, $mdSidenav, ItemService){
    $scope.output_item_search = [];
    $scope.items = {};
    ItemService.getAll().then(function (response) {
        $scope.items = response;
        console.log(response);
    }.bind(this));

    $scope.filterItems = function(){
        console.log("filterItems!");
        //$scope.items = newItems;
    }


    $scope.toggleLeft = function() {
        $mdSidenav("left")
          .toggle();
    };


}
