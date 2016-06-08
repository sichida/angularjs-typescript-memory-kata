import angular from 'angular';
import {BoardComponentDefinition} from './board.component.ts';

console.log(angular);
angular.module('board', [])
    .component('board', BoardComponentDefinition);