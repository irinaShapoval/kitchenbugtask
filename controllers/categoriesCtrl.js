(function(angular) {
var categoriesCtrl = function ($scope, datasourceService) {
    var dataProm = datasourceService.getAll('data.json');
    dataProm.then(function (res) {
        $scope.categories = res.data.categories;
    });
};
angular.module('categoriesApp').controller('categoriesCtrl', ['$scope', 'datasourceService', categoriesCtrl])
})(angular);