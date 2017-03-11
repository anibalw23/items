myApp.controller('proyectoList', ProyectoListController);

function ProyectoListController($scope, ProyectoService){
    ProyectoService.getAll().then(function (response) {
        $scope.proyectos = response;
    }.bind(this));
}
