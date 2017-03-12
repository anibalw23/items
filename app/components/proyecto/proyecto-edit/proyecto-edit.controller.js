myApp.controller('proyectoEdit', proyectoEditController);

function proyectoEditController($scope,  $state, $stateParams , ProyectoService){

    $scope.title = "jaja";

    ProyectoService.find($stateParams.id).then(function(proyecto){
            $scope.proyecto = proyecto;
            console.log($scope.proyecto.codigo);
            console.log("id = " + $scope.proyecto._id);
     });
     $scope.edit = function() {
         console.log("edit proyecto!");
        ProyectoService.edit($scope.proyecto).then(function (response) {
            $state.go('proyectos');
        }.bind(this));
     }

}
