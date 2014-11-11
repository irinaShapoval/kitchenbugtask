(function(angular) {
angular.module('categoriesApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/categories', {
                controller: 'categoriesCtrl',
                templateUrl: 'views/categoriesView.html'
            })
            .when('/categories/:id', {
                controller: 'categoryDetailsCtrl',
                templateUrl: 'views/categoryDetailsView.html'
            })
            .otherwise( {redirectTo: '/categories'});
    });
}(angular));