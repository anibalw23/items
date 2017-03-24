ItemDeleteModule.controller('itemDelete', itemDeleteController);

function itemDeleteController($scope, $stateParams, $state , ItemService){

    $scope.delete = function () {
        console.log("delete() ");
        ItemService.delete($stateParams.id).then(function (response) {
             $scope.response = response;
             $state.go('items');
        }.bind(this));
    }

}
