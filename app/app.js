var myApp = angular.module("myApp",[
    'ui.router',
    'schemaForm',
    'ItemCreateModule'
]);

/*myApp.controller('MainCtrl', function($scope) {

    console.log("My App");

    $scope.schema = {

    "type": "object",
    "title": "Comment",
    "properties": {
      "name": {
        "title": "Name",
        "type": "string",
        "required":true
      },
      "email": {
        "title": "Email",
        "type": "string",
        "pattern": "^\\S+@\\S+$",
        "description": "Email will be used for evil."
      },
      "comment": {
        "title": "Comment",
        "type": "string",
        "maxLength": 20,
        "validationMessage": "Don't be greedy!"
      }
    },
    "required": [
      "email",
      "comment"
    ]

  };


  $scope.form = [

    "test", {
      key: "name",

    }, {
      key: "email",

    }, {
      key: "comment",
      type: "textarea",
      placeholder: "Make a comment",

    }, {
      type: "submit",
      style: "btn-info",
      title: "OK"
    },

  ];



  $scope.model = {};
});
*/



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
    .state('items', {
        url:'items',
        templateUrl:'/app/components/item/item-list/item-list.html',
        controller:'itemList'
    })
    .state('CreateItem',{
            url:'items/create',
            templateUrl:'/app/components/item/item-create/item-create.html',
            controller:'itemCreate'
     })
     .state('detailsItem', {
        url:'items/details/:id',
        templateUrl:'/app/components/item/item-details/item-details.html',
        controller:'itemDetails'
    })

});
