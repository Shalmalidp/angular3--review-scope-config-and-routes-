let ListController = function($scope, $http, URL) {
  
  $http.get(URL).then(function(res){
    console.log(res.data);
    return (res.data);
  });

};

ListController.$inject = ['$scope','$http','URL'];

export {ListController};