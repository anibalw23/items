BancopreguntaListModule.controller('bancopreguntaList', BancoPreguntasListController);

function BancoPreguntasListController($scope, BancoPreguntaService){
    BancoPreguntaService.getAll().then(function (response) {
        $scope.bancospreguntas = response;
        console.log(response);
    }.bind(this));
}
