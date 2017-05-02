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
    $scope.newMovieTitle = '';
    $scope.newMovieDscription = 'http://www.soulstepradio.com/images/ha/oneok.jpg';
    $scope.newMovieCategory = '';
    $scope.newMovieImage = '';

    $scope.validateTitle = function() {
      if($scope.newMovieTitle.length > 0) {
        console.debug($scope.newMovieTitle);
      } else {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = function() {
      var movie = {
        title: $scope.newMovieTitle,
        category: $scope.newMovieCategory,
        image: $scope.newMovieImage,
        description: $scope.newMovieDscription
      };

      $scope.movies.push(movie);
    };

    $scope.checkCategorySelected = function(){
      if($scope.newMovieCategory === '') {
        window.alert('Category cannot be empty');
      }
    };

    $scope.checkDescription = function(){
      console.debug($scope.newMovieDscription);
    };
  })
  .controller('SubCtrl', function($scope){
    $scope.title = 'Lots of movies: ' + $scope.movies.length + ' movies.';
  })
  .controller('FormCtrl', function ($scope) {
      console.log('We have form');
});
