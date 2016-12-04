

app.controller('ngCtrl', function($scope, beers) {
   $scope.beers = beers.beers;
    


   $scope.addToDo = function(){
   	var toDo = {
   		name : $scope.toDo,
   		url : $scope.url,
   		description : $scope.description,
   		rate : $scope.rate
   	}
   	console.log($scope.list)

   $scope.beers.push(toDo)   	
}

$scope.Remove = function (x){
 $scope.beers.splice(x,1)
 console.log("here");
}
})
