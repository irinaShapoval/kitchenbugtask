(function(angular) {
var categoriesDrtv = function($timeout) {
	return {
		template: '<div ng-repeat="category in categories">' +
                       '<a href="#/categories/{{category.id}}">' +
                            '<div class="item">{{category.name}}</div>' +
                        '</a>' +
                  '</div>',
		scope: {
            categories: '='
		},
		link: function (scope, element, attrs, rectanglesCtrl) {

		}
	}
};
angular.module('categoriesApp').directive('categoriesDrtv', ['$timeout', categoriesDrtv])
}(angular));