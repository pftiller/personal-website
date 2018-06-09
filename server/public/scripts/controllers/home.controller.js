myApp.controller('HomeController', ['$scope', '$location', function ($scope, $location) {
    let self = this;
    $locationProvider.html5Mode(true);
}]);