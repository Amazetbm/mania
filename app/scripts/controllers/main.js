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
        image: '/images/awesomehuh.png',
        description: 'This 13 chapter is based on some shit.',
      category: 'Epic'
      },
      {
        title: 'Zakuul',
        image: '/images/gink.png',
        description: 'This where the Sith lay.',
        category: 'Aweseom'
      }
    ];

    $scope.close = false;

    $scope.movies = movieList;

    $scope.movie = {
      title: '',
      image: 'http://localhost:9000/images/m.png',
      description: '',
      category: ''
    };

    $scope.isValid = function(){
      if($scope.movie.title === '') {
        return false;
      }
      if($scope.movie.description === '') {
        return false;
      }
      if($scope.movie.category === '') {
        return false;
      }
      return true;
    }

    $scope.validateTitle = function() {
      if($scope.movie.title.length > 0) {
        console.debug($scope.movie.title);
      } else {
        window.alert('Title is required');
      }
    };

    $scope.addMovie = function() {
      $scope.movies.push(angular.copy($scope.movie));
    };

    $scope.checkCategorySelected = function(){
      if($scope.movie.category === '') {
        window.alert('Category cannot be empty');
      }
    };

    $scope.checkDescription = function(){
      console.debug($scope.movie.description);
    };
  })
  .controller('SubCtrl', function($scope){
    $scope.title = 'Lots of movies: ' + $scope.movies.length + ' movies.';
  })
  .controller('FormCtrl', function ($scope) {
      console.log('We have form');
});
