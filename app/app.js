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
        templateUrl:'/app/components/proyecto/proyecto-list/proyecto-list.html',
        controller:'proyectoList'
    })
    .state('detailsProyecto', {
        url:'proyectos/details/:id',
        templateUrl:'/app/components/proyecto/proyecto-details/proyecto-details.html',
        controller:'proyectoDetails'
    })
    .state('CreateProyecto',{
        url:'proyectos/create',
        templateUrl:'/app/components/proyecto/proyecto-create/proyecto-create.html',
        controller:'proyectoCreate'
    })
    .state('deleteProyecto',{
        url:'proyectos/delete/:id',
        templateUrl:'/app/components/proyecto/proyecto-delete/proyecto-delete.html',
        controller:'proyectoDelete'
    })
    .state('editProyecto',{
        url:'proyectos/edit/:id',
        templateUrl:'/app/components/proyecto/proyecto-edit/proyecto-edit.html',
        controller:'proyectoEdit',
    })
    .state('bancopreguntas', {
        url:'bancopreguntas',
        templateUrl:'/views/partials/bancopreguntas.html'
    })


});
