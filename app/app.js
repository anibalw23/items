var myApp = angular.module("myApp",[
    'ui.router',
]);

myApp.config( function($stateProvider, $urlRouterProvider){

    $stateProvider.state('inicio',{
        url:'/',
        templateUrl:'/app/components/home/home.html'
    })
    .state('proyectos', {
        url:'proyectos',
        templateUrl:'/app/components/proyecto/proyecto-list.html',
        controller:'proyectoList'
    })
    .state('CreateProyecto',{
        url:'proyectos/create',
        templateUrl:'/app/components/proyecto/proyecto-create.html',
        controller:'proyectoCreate'
    })
    .state('bancopreguntas', {
        url:'bancopreguntas',
        templateUrl:'/views/partials/bancopreguntas.html'
    })


});
