

app.controller('ngCtrl', function($scope, ngfactory) {
   $scope.list = ngfactory.list;
    


   $scope.addToDo = function(){
   	var toDo = {
   		name : $scope.toDo,
   		url : $scope.url,
   		description : $scope.description,
   		rate : $scope.rate
   	}
   	console.log($scope.list)

   $scope.list.push(toDo)   	
}

$scope.Remove = function (x){
 $scope.list.splice(x,1)
 console.log("here");
}
})
