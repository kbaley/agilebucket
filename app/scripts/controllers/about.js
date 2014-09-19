'use strict';

/**
 * @ngdoc function
 * @name agilebucketApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the agilebucketApp
 */
angular.module('agilebucketApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
