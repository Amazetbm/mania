angular.module('movieManiaApp')
  .controller('MovieCtrl', function($scope, $routeParams){
    var id = parseInt($routeParams.id, 10);

    var movieList = [{
      id: 23,
      title: 'Ace Drummond',
      image: '/images/awesomehuh.png',
      description: 'This 13 chapter is based on some shit.',
      category: 'Epic'
    },
      {
        id: 5,
        title: 'Zakuul',
        image: '/images/gink.png',
        description: 'This where the Sith lay.',
        category: 'Aweseom'
      }
    ];

    for (var index in movieList){
      var movie = movieList[index];
      if(movie.id === id) {
        $scope.movie = movie;
        break;
      }
    }
  })
