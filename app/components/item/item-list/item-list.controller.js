myApp.controller('itemList', ItemListController);

function ItemListController($scope, ItemService){
    $scope.output_item_search = [];
    ItemService.getAll().then(function (response) {
        $scope.items = response;
        console.log(response);
    }.bind(this));
}
