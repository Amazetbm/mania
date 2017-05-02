'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope) {
    var movieList = [{
        title: 'Ace Drummond',
        image: '',
        description: 'This 13 chapter is based on some shit.'
      },
      {
        title: 'Zakuul',
        image: '',
        description: 'This where the Sith lay.'
      }
    ];

    $scope.movies = movieList;
  })
  .controller('SubCtrl', function($scope){
    $scope.title = 'Lots of movies: ' + $scope.movies.length + ' movies.';
  })
  .controller('FormCtrl', function ($scope) {
      console.log('We have form');
});
