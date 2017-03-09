myApp.controller('proyectoCreate', proyectoCreateController);

function proyectoCreateController($scope, $http, $location, ProyectoService){

    $scope.create = function () {
        //alert(JSON.stringify($scope.proyecto));
        ProyectoService.create($scope.proyecto).then(function (response) {
            $scope.proyectos = response;
            $location.path('/proyectos');
        }.bind(this));
    }

}
