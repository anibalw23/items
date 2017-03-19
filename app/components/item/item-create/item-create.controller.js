ItemCreateModule.controller('itemCreate', itemCreateController);

function itemCreateController($scope, $http, $state , ItemService, schemaForm){
   console.log("itemCreateController");

    $scope.tipos_preguntas =[
        {tipo:"seleccion_multiple"},
        {tipo:"verdadero_falso"},
        {tipo:"numerica"},
        {tipo:"ensayo"},
        {tipo:"matriz"},
    ];


    $scope.create = function () {
        ItemService.create($scope.item).then(function (response) {
             $scope.items = response;
             $state.go('items');
        }.bind(this));
    }

}
