
var ItemCreateModule = angular.module("ItemCreateModule",[
    'ui.router',
    'angular-multi-select',
]);

ItemCreateModule.component('itemCreate',{
    templateUrl:'app/components/item/item-create.html',
    controller: 'itemCreate',
});
