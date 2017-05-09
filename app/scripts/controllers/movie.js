angular.module('movieManiaApp')
  .controller('MovieCtrl', function($scope, $routeParams, $http){
    var id = parseInt($routeParams.id, 10);

    var movieList = [{
      id: 23,
      title: 'Ace Drummond',
      searchTerms: 'Ace Drummond',
      image: '/images/awesomehuh.png',
      description: 'This 13 chapter is based on some shit.',
      category: 'Epic'
    },
      {
        id: 5,
        title: 'Zakuul',
        searchTerms: 'Zakuul',
        image: '/images/gink.png',
        description: 'This where the Sith lay.',
        category: 'Awesome'
      },
      {
        id: 34,
        title: 'Alderaan is gone',
        searchTerms: 'Alderaan',
        image: '/images/crying.png',
        description: 'You are my only hope.',
        category: 'Awesome'
      }
    ];


    for (var index in movieList){
      var movie = movieList[index];
      if(movie.id === id) {
        $scope.movie = movie;
        $scope.loading = true;
        $http.jsonp('http://api.duckduckgo.com', {
          params: {
            q: $scope.movie.searchTerms,
            format: 'json',
            callback: 'JSON_CALLBACK'
          }
        }).success(function (data) {
          $scope.movie.abstract = data.Abstract;
          $scope.movie.abstractSource = data.AbstractSource;
        }).error(function (data) {
          console.log(arguments);
        }).finally(function() {
          $scope.loading = false;
        });
      }
    }
  });
