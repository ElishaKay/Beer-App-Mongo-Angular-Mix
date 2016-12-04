

app.factory('beers', ['$http', function ($http) {
  var beerService = {
    beers: []
  };

 beerService.getAll = function () {
  return $http.get('/beers').success(function (data) {
    // this copies the response posts to the client side
    // 'beers' under 'beerService'
    angular.copy(data, beerService.beers);
  });
};

  return beerService;
}]);