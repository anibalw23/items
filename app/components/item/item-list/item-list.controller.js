myApp.controller('itemList', ItemListController);

function ItemListController($scope, ItemService){
    ItemService.getAll().then(function (response) {
        $scope.items = response;
        console.log(response);
    }.bind(this));
}
