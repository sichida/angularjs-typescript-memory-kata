import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import memoryView from './features/memory/memory.view.html';

import {MemoryController} from './features/memory/memory.controller.ts';
import {CardComponent} from './features/card/card.component.ts';

angular.module('typescript-kata', ['ui.router'])
    .config($stateProvider => {
        $stateProvider.state('home', {
            url: '/',
            template: memoryView,
            controller: MemoryController,
            controllerAs: 'ctrl'
        });
    })
    .component('card', new CardComponent());
