var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './templates/views/home.html',
        controller: 'HomeController as vm'
  
      })
      .otherwise('/404',{
          template:'<h1> 404</h1>'
      })
}]);