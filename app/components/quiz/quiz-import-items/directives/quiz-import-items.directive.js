QuizImportItemsModule.directive("quizImportItems", function() {
    return {
        scope: {
            selectedItems:'=outputData'
        },
        templateUrl: '/app/components/quiz/quiz-import-items/directives/quiz-import-items.html',
        controller: function($scope){
           $scope.result = [];
           $scope.selectedItems = [];
        },

       link: function(scope, elem, attrs){
            console.log(" -- quizImportItems Element ready!");
       }


    };
});
