'use strict';

// Declare app level module which depends on views, and components
angular.module('Project', [
  'ngRoute',
  'Project.home',
   'Project.Register',
    'Project.Welcome',
    'Project.addPost'
    
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  

 // $routeProvider.otherwise({redirectTo: '/home'});
}]);
