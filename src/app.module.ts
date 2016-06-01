import angular from 'angular';
import 'angular-route';
import 'angular-resource';
import memoryView from './features/memory/memory.view.html!text';

import {MemoryController} from './features/memory/memory.controller.ts';

angular.module('typescript-kata', ['ngRoute'])
    .config($routeProvider => {
        $routeProvider.when('/', {
            template: memoryView,
            controller: MemoryController,
            controllerAs: 'ctrl'
        });
    });