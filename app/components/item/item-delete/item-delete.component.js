var ItemDeleteModule = angular.module("ItemDeleteModule",[
    'ui.router',
]);

ItemDeleteModule.component('itemDelete',{
    templateUrl:'app/components/item/item-delete/item-delete.html',
    controller: 'itemDelete',
});
