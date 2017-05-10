angular.module('movieManiaApp')
  .controller('MovieCtrl', function($scope, $routeParams, $http, Movies){
    var id = parseInt($routeParams.id, 10);
    Movies.get(id).then(function(movie){
      $scope.movie = movie;
    });
  });
