itemDetailsModule.controller('itemDetails', itemDetailsController);

function itemDetailsController($scope, $stateParams, $location, $state , ItemService){
    console.log("details!");
    ItemService.find($stateParams.id).then(function (response) {
        $scope.item = response;
        console.log(response);
    }.bind(this));


}
