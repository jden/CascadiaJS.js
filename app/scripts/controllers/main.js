'use strict';

angular.module('cascadiaJsjsApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.random = function random() {
      var randomPage = Math.floor(Math.random()*20).toString();
      $location.path(randomPage);
    };
  });
