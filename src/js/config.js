function config($stateProvider,$urlRouterProvider) {
  
  // console.log($stateProvider);
  // if non existing state go home
  $urlRouterProvider.otherwise('/');

  // define all states  takes a name and object
  $stateProvider
    .state('list',{
      url         :'/',
      controller  :'ListController',
      templateUrl :'templates/list.tpl.html'
    })
    .state('single',{
      url         :'/single',
      controller  :'SingleController',
      templateUrl : 'templates/single.tpl.html'
    })
    .state('add',{
      url         :'/add',
      controller  :'AddController',
      templateUrl :'templates/add.tpl.html'
    })
  ;
  

};

config.$inject = ['$stateProvider','$urlRouterProvider'];

export { config };