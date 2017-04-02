ItemCreateModule.controller('itemCreate', itemCreateController);

function itemCreateController($scope, $http, $state , ItemService, ClasificadorService){
   console.log("itemCreateController");

    $scope.item = {};
    $scope.item.choices = [];
    $scope.input_data = [];
    $scope.output_data = [];
    var tempData = [];
     ClasificadorService.getAll().then(function (response) {
         $scope.input_data = response;
    }.bind(this));


    $scope.tipos_preguntas =[
        {tipo:"seleccion_multiple"},
        {tipo:"verdadero_falso"},
        {tipo:"numerica"},
        {tipo:"ensayo"},
        {tipo:"matriz"},
    ];



    //Create POST:
    $scope.create = function () {
        $scope.item.clasificadores = $scope.output_data;
        ItemService.create($scope.item).then(function (response) {
             $scope.items = response;
             $state.go('items');
        }.bind(this));
    }

}
