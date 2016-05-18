import angular from 'angular';
import 'angular-ui-router'; //directly from source no need for naming
//import $ from 'jquery';

//URL
const url = 'https://secret-forest-21470.herokuapp.com/collections/angular34343fg5tfgw32';
//importing controllers
import {AddController }   from './controllers/add.controller';
import {ListController}   from './controllers/list.controller';
import {SingleController} from './controllers/single.controller';

//import our Configuration 
import { config } from './config';

//registering angular modules
angular
  .module('app',['ui.router'])
  .constant('URL', url)
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
;

