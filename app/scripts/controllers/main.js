'use strict';

/**
 * @ngdoc function
 * @name agilebucketApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agilebucketApp
 */
angular.module('agilebucketApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
