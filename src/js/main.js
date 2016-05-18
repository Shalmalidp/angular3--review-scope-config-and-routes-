import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';

angular
  .module('app',[])
  .controller('CoolController', ['$scope', function($scope){
    //what is $scope 
    $scope.animals =['goat','cow','lion','tiger','bear'];
    console.log($scope);

  }])
;

