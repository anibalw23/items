
var itemDetailsModule = angular.module("ItemDetailsModule",[
    'ui.router',
]);

itemDetailsModule.component('itemDetails',{
    templateUrl:'app/components/item/item-details/item-details.html',
    controller: 'itemDetails',
});
