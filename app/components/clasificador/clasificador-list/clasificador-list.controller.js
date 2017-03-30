clasificadorModule.controller('clasificadorList', ClasificadorListController);

function ClasificadorListController($scope, ClasificadorService){
    console.log("ClasificadorListController!");
    var tree;
    $scope.my_tree = tree = {};
    $scope.createCategory = {};
    $scope.selectedCategory = {};
    $scope.treedata = [];

    ClasificadorService.getAll().then(function (response) {
         $scope.treedata = response;
         console.log(response);
    }.bind(this));


    $scope.add = function(){
        var b;
        b = tree.get_selected_branch();
        var clasificador ={};
        if(b == null){ // es elemento padre
           console.log("b = null");
           clasificador = {
                label:$scope.createCategory.label,
                parentId:null,
            };
            tree.add_branch(b,{
               label: $scope.createCategory.label,
               parentId: null,
            });
        }
        else{
          clasificador = {
                label:$scope.createCategory.label,
                parentId:b.id,
            };
            tree.add_branch(b,{
               label: $scope.createCategory.label,
               parentId:  b.id,
            });
        }

         ClasificadorService.create(clasificador).then(function (response) {
                 console.log(response);
         }.bind(this));

        $scope.mode = undefined;
        $scope.selectedCategory = {};
        clasificador = undefined;

    }
    $scope.edit = function(){
         var b;
         b = tree.get_selected_branch();
         b.label = $scope.selectedCategory;
         var clasificador = {
            _id:b.id,
            label:b.label,
            parentId:b.id,
         };
         ClasificadorService.edit(clasificador).then(function (response) {
                 console.log(response);
         }.bind(this));

         $scope.mode = undefined;
         $scope.selectedCategory = {};
         clasificador = undefined;
    }
    $scope.delete = function(){
        var b;
        console.log(b);
        b = tree.get_selected_branch();
        ClasificadorService.delete(b.id).then(function (response) {
                 console.log(response);
         }.bind(this));

        tree.remove_branch(b);
        $scope.mode = undefined;
        $scope.selectedCategory = {};
    }


     $scope.my_tree_handler = function(branch) {
      var _ref;
      $scope.output = "You selected: " + branch.label;
      $scope.selectedCategory = branch.label;
      if ((_ref = branch.data) != null ? _ref.description : void 0) {
        return $scope.output += '(' + branch.data.description + ')';
      }
    };





}
