'use strict';

// Declare app level module which depends on views, and components
angular.module('songlist', [
  'ngRoute'
  /*,
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
  */
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/', {
      templateUrl: 'home.html' // ,
      // controller: 'HomeController'
    });

    // $routeProvider.otherwise({redirectTo: '/view1'});
    $routeProvider.otherwise({ redirectTo: '/' });

  }]);