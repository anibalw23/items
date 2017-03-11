myApp.controller('proyectoDetails', proyectoDetailsController);

function proyectoDetailsController($scope, $stateParams, $location, $state , ProyectoService){
    console.log("details!");
    ProyectoService.find($stateParams.id).then(function (response) {
        $scope.proyecto = response;
        console.log(response);
    }.bind(this));


}
