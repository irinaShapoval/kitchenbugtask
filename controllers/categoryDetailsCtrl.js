/**
 * Created by irina on 11/11/2014.
 */

(function(angular) {
    var categoryDetailsCtrl = function ($scope, $routeParams, datasourceService) {
        $scope.categoryId = $routeParams.id;
        $scope.category = datasourceService.getSpecific(+$scope.categoryId);
    };
    angular.module('categoriesApp').controller('categoryDetailsCtrl', ['$scope', '$routeParams', 'datasourceService', categoryDetailsCtrl])
})(angular);