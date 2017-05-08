'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', function ($scope, $location) {
    var movieList = [{
        id: 23,
        title: 'Ace Drummond',
        slug: 'ace-drummond',
        image: '/images/awesomehuh.png',
        description: 'This 13 chapter is based on some shit.',
      category: 'Epic'
      },
      {
        id: 5,
        title: 'Zakuul',
        slug: 'zakuul',
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

    $scope.goToRandomMovie = function() {
      var index = Math.floor(Math.random() * $scope.movies.length);
      var movie = $scope.movies[index];
      var url = 'movie/'+ movie.id +'/' + movie.slug;
      $location.url(url);
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
