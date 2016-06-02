import angular from 'angular';
import 'angular-ui-router';
import 'angular-resource';
import memoryView from './features/memory/memory.view.html!text';

import {MemoryController} from './features/memory/memory.controller.ts';

angular.module('typescript-kata', ['ui.router'])
    .config($stateProvider => {
        $stateProvider.state('home', {
            url: '/',
            template: memoryView,
            controller: MemoryController,
            controllerAs: 'ctrl'
        });
    });