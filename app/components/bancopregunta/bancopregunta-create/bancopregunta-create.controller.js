BancopreguntaCreateModule.controller('bancopreguntaCreate', bancopreguntaCreateController);

function bancopreguntaCreateController($scope, $http, $state , BancoPreguntaService){

    console.log("bancopreguntaCreateController");
    //Create POST:
    $scope.create = function () {
        BancoPreguntaService.create($scope.bancopregunta).then(function (response) {
             $scope.bancopreguntas = response;
             $state.go('bancopreguntas');
        }.bind(this));
    }

}
