var presControllers = angular.module('presControllers',[]);

presControllers.controller('ListController',["$scope","$http", function($scope, $http) {

  $http.get("_assets/data/data.json").success(function(data){
    $scope.presidents = data;
    $scope.presOrder = "name";
  });

}]);

presControllers.controller('DetailsController',["$scope","$http","$routeParams", function($scope, $http, $routeParams) {

  $http.get("_assets/data/data.json").success(function(data){
    $scope.presidents = data;
    $scope.whichItem = $routeParams.itemId
  });
  
}]);
