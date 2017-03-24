ItemCreateModule.controller('itemCreate', itemCreateController);

function itemCreateController($scope, $http, $state , ItemService){
   console.log("itemCreateController");

    $scope.item = {};
    $scope.item.choices = [];

 $scope.input_data = [
    {
        "text": "A",
        "value": "a",
        "id": 1,
        "open": false,
        "checked": false
    },
    {
        "text": "B",
        "value": "b",
        "id": 2,
        "open": true,
        "children": [
            {
                "text": "C",
                "value": "c",
                "id": 3,
                "checked": true,
                "open": false
            }
        ]
    },
    {
        "text": "D",
        "value": "d",
        "id": 4,
        "children": [
            {
                "text": "E",
                "value": "e",
                "id": 5,
                "open": false,
                "checked": false
            },
            {
                "text": "F",
                "value": "f",
                "id": 6,
                "checked": true,
                "open": false
            }
        ],
        "open": false
    },
    {
        "text": "G",
        "value": "g",
        "id": 7,
        "children": [
            {
                "text": "H",
                "value": "h",
                "id": 8,
                "open": false,
                "checked": false
            },
            {
                "text": "I",
                "value": "i",
                "id": 9,
                "children": [
                    {
                        "text": "J",
                        "value": "j",
                        "id": 10,
                        "open": false,
                        "checked": false
                    },
                    {
                        "text": "K",
                        "value": "k",
                        "id": 11,
                        "open": false,
                        "checked": false
                    }
                ],
                "open": false
            },
            {
                "text": "L",
                "value": "l",
                "id": 12,
                "open": false,
                "checked": false
            },
            {
                "text": "M",
                "value": "m",
                "id": 13,
                "open": false,
                "checked": false
            }
        ],
        "open": false
    },

];

    $scope.output_data = [
    {
        "text": "C",
        "value": "c",
        "id": 3,
        "open": false,
        "checked": true
    },
    {
        "text": "F",
        "value": "f",
        "id": 6,
        "open": false,
        "checked": true
    },
    {
        "text": "S",
        "value": "s",
        "id": 19,
        "open": false,
        "checked": true
    },
    {
        "text": "Y",
        "value": "y",
        "id": 25,
        "open": false,
        "checked": true
    },
    {
        "text": "Z",
        "value": "z",
        "id": 26,
        "open": false,
        "checked": true
    }
];
    $scope.tipos_preguntas =[
        {tipo:"seleccion_multiple"},
        {tipo:"verdadero_falso"},
        {tipo:"numerica"},
        {tipo:"ensayo"},
        {tipo:"matriz"},
    ];



    //Create POST:
    $scope.create = function () {
        console.log($scope);
        ItemService.create($scope.item).then(function (response) {
             $scope.items = response;
             $state.go('items');
        }.bind(this));
    }

}
