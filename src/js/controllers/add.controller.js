let AddController = function($scope,$http,URL, $state) {
  $scope.addFoodItem = function(foodObj){
    $http.post(URL,foodObj).then((res)=>{
      console.log(res);
      $scope.food = {};
      //route user to list page
      $state.go('list');
    });
  }

};

AddController.$inject = ['$scope','$http','URL', '$state'];

export { AddController };