myApp.controller('proyectoCreate', proyectoCreateController);

function proyectoCreateController($scope, $http, $location, $state , ProyectoService){

    $scope.create = function () {
        ProyectoService.create($scope.proyecto).then(function (response) {
            $scope.proyectos = response;
             $state.go('proyectos');
            //$location.path('proyectos');
        }.bind(this));
    }

}
