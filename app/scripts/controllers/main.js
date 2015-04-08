'use strict';

/**
 * @ngdoc function
 * @name ixigoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ixigoTestApp
 */
angular.module('ixigoTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });