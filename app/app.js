var myApp = angular.module("myApp",[
    'ui.router',
    'ItemModule',
    'ItemCreateModule',
    'ItemDeleteModule',
    'ItemDetailsModule',
    'ClasificadorModule',
    'QuizModule',
    'BancoPreguntaModule',
    'angularBootstrapNavTree'
]);

myApp.controller('MainCtrl', function($scope) {
    console.log("My App");

});




myApp.config( function($stateProvider, $urlRouterProvider){

    //$urlRouterProvider.otherwise('inicio');

    $stateProvider.state('inicio',{
        url:'/',
        templateUrl:'/app/components/home/home.html'

    })
    .state('proyectos', {
        url:'/proyectos',
        templateUrl:'/app/components/proyecto/proyecto-list/proyecto-list.html',
        controller:'proyectoList'
    })
    .state('detailsProyecto', {
        url:'/proyectos/details/:id',
        templateUrl:'/app/components/proyecto/proyecto-details/proyecto-details.html',
        controller:'proyectoDetails'
    })
    .state('CreateProyecto',{
        url:'/proyectos/create',
        templateUrl:'/app/components/proyecto/proyecto-create/proyecto-create.html',
        controller:'proyectoCreate'
    })
    .state('deleteProyecto',{
        url:'/proyectos/delete/:id',
        templateUrl:'/app/components/proyecto/proyecto-delete/proyecto-delete.html',
        controller:'proyectoDelete'
    })
    .state('editProyecto',{
        url:'/proyectos/edit/:id',
        templateUrl:'/app/components/proyecto/proyecto-edit/proyecto-edit.html',
        controller:'proyectoEdit',
    })
    .state('quizes', {
        url:'/quizes',
        templateUrl:'/app/components/quiz/quiz-list/quiz-list.html',
        controller:'quizList'
    })
     .state('CreateQuiz', {
        url:'/quizes/create',
        templateUrl:'/app/components/quiz/quiz-create/quiz-create.html',
        controller:'quizCreate'
    })
    .state('takeQuiz', {
        url:'/quizes/take/:id',
        templateUrl:'/app/components/quiz/quiz-take/quiz-take.html',
        controller:'quizTake'
    })

    .state('bancopreguntas', {
        url:'/bancopreguntas',
        templateUrl:'/app/components/bancopregunta/bancopregunta-list/bancopregunta-list.html',
        controller:'bancopreguntaList'
    })
    .state('CreateBancoPregunta', {
        url:'bancopreguntas/create',
        templateUrl:'/app/components/bancopregunta/bancopregunta-create/bancopregunta-create.html',
        controller:'bancopreguntaCreate'
    })

    .state('items', {
        url:'/items',
        templateUrl:'/app/components/item/item-list/item-list.html',
        controller:'itemList'
    })

    .state('CreateItem',{
            url:'/items/create',
            templateUrl:'/app/components/item/item-create/item-create.html',
            controller:'itemCreate'
     })
     .state('detailsItem', {
        url:'/items/details/:id',
        templateUrl:'/app/components/item/item-details/item-details.html',
        controller:'itemDetails'
    })
    .state('deleteItem',{
        url:'/items/delete/:id',
        templateUrl:'/app/components/item/item-delete/item-delete.html',
        controller:'itemDelete'
    })
    .state('clasificadores', {
        url:'/clasificadores',
        templateUrl:'/app/components/clasificador/clasificador-list/clasificador-list.html',
        controller:'clasificadorList'
    })




});
