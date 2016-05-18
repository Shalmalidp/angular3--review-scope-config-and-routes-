function config($stateProvider,$urlRouterProvider) {
  
  // console.log($stateProvider);
  $urlRouterProvider.otherwise('/');

  

};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export { config };