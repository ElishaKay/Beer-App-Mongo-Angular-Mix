// // only var in factory 

// app.factory('ngfactory', function(){
//  	var list = [];

//  	return {list : list}
//   });


// Below: The New code

app.factory('beers', ['$http', function ($http) {
  var beerService = {
    beers: []
  };

  beerService.getAll = function () {
    // blank for now
  };

  return beerService;
}]);