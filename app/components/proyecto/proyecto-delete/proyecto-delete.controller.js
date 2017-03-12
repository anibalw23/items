myApp.controller('proyectoDelete', proyectoDeleteController);

function proyectoDeleteController($scope, $stateParams, $state , ProyectoService){

    $scope.delete = function () {
        ProyectoService.delete($stateParams._id).then(function (response) {
            $scope.response = response;
             $state.go('proyectos');
        }.bind(this));
    }

}
