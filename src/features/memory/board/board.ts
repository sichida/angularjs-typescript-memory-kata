import angular from 'angular';
import './board.css';
import {BoardComponentDefinition, BoardComponentController} from './board.component.ts';

angular.module('memory', [])
    .component('board', BoardComponentDefinition);