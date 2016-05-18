let ListController = function($scope, $http, URL) {
  init(); //BEST PRACTICES TO MAKE AN INIT() WHICH HOUSES THE GET REQ


  function init(){
     $http.get(URL).then((res)=>{
      console.log(res.data);
      $scope.allFoods = res.data;
    });
  }
  
 ;

};

ListController.$inject = ['$scope','$http','URL'];

export {ListController};