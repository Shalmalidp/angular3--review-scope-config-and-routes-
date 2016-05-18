import angular from 'angular';
import 'angular-ui-router'; //directly from source no need for naming
//import $ from 'jquery';

//importing controllers
import {AddController }   from './controllers/add.controller';
import {ListController}   from './controllers/list.controller';
import {SingleController} from './controllers/single.controller';

//import our Configuration 
import { config } from './config';

//registering angular modules
angular
  .module('app',['ui.router'])
  .config(config)
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .controller('SingleController', SingleController)
;

