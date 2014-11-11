(function (angular) {
    var datasourceService = function ($http) {
        var categories;
        var baseStoragePath = 'storage/';
        this.getAll = function (name) {
            return $http.get(baseStoragePath + name).success(function(data) {
                if (!categories) {
                    categories = data.categories;
                }
                return data;
            });
        };
        this.getSpecific = function (id) {
            if (!categories) return;
            for (var i = 0; i < categories.length; ++i) {
                if (categories[i].id == id) {
                    return categories[i];
                }
            }
            return null;
        }
    };
    angular.module('categoriesApp').service('datasourceService', ['$http', datasourceService])
}(angular));