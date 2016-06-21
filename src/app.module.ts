import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import memoryView from './features/memory/memory.view.html';

import {MemoryController} from './features/memory/memory.controller.ts';
import {CardComponentDefinition} from './features/card/card.component.ts';
import {BoardComponentDefinition, BoardComponentController} from './features/board/board.component.ts';

angular.module('typescript-kata', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider.state('home', {
            url: '/',
            template: memoryView,
            controller: MemoryController,
            controllerAs: '$ctrl'
        });
        $urlRouterProvider.when('', '/');
    })
    .component('card', CardComponentDefinition)
    .component('board', BoardComponentDefinition)
    .controller('BoardComponentController', () => new BoardComponentController());