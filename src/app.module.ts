import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import memoryView from './features/memory/memory.view.html';
import './features/memory/board/board.ts';

import {MemoryController} from './features/memory/memory.controller.ts';
import {CardComponentDefinition} from './features/card/card.component.ts';

angular.module('typescript-kata', ['ui.router', 'board'])
    .config($stateProvider => {
        $stateProvider.state('home', {
            url: '/',
            template: memoryView,
            controller: MemoryController,
            controllerAs: 'ctrl'
        });
    })
    .component('card', CardComponentDefinition);
