'use strict';

/**
 * @ngdoc function
 * @name movieManiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieManiaApp
 */
angular.module('movieManiaApp')
  .controller('MainCtrl', ['$scope', '$location', 'Movies', function ($scope, $location, Movies) {
    $scope.movies = '';
    Movies.load().then(function(listOfMovies){
      $scope.movies = listOfMovies;
    });

    $scope.close = false;

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
      Movies.add($scope.movie);
    };

    $scope.checkCategorySelected = function(){
      if($scope.movie.category === '') {
        window.alert('Category cannot be empty');
      }
    };

    $scope.checkDescription = function(){
      console.debug($scope.movie.description);
    };
  }]);
