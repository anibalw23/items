
var ItemCreateModule = angular.module("ItemCreateModule",[
    'ui.router',
]);

ItemCreateModule.component('itemCreate',{
    templateUrl:'app/components/item/item-create.html',
    controller: 'itemCreate',
});
