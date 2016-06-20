# AngularJS kata using TypeScript

This kata aims to create a 
[_Memory_ game](https://en.wikipedia.org/wiki/Concentration_%28game%29).
We decided to write an [AngularJs](https://angularjs.org/) application with
[Typescript](https://www.typescriptlang.org/) language.

The main advantages to choose this language are:
- having a typed language which can avoid runtime issues
- having a testable application
- learn about Typescript before Angular 2 is out of beta 

You should follow all steps describe [here](#Steps) to use this kata properly.

## Memory game - rules
Rules are very simple: you need to find all duplicated cards.
You need to select 2 cards and, if they are the same, you get points; if not,
they hide and you must remember their location for future matches. 

## Requirements

In order to run this kata on your working station you need:
- [node.js](https://nodejs.org/en/)
- [jspm](http://jspm.io/)
    - You need to install [the beta version](http://jspm.io/0.17-beta-guide/index.html)
- Knowledgment in AngularJs. The aim of this kata is to learn Typescript, not AngularJs.

## Steps
### 1. Let's verify your workstations

Clone this project and run `npm install` command line:
```bash
angular-kata$ git clone https://github.com/sichida/angularjs-typescript-memory-kata.git
Cloning into 'angularjs-typescript-memory-kata'...
remote: Counting objects: 459, done.
remote: Compressing objects: 100% (131/131), done.
remote: Total 459 (delta 42), reused 2 (delta 2), pack-reused 321
Receiving objects: 100% (459/459), 5.41 MiB | 458.00 KiB/s, done.
Resolving deltas: 100% (110/110), done.
Checking connectivity... done.
angular-kata$ cd angularjs-typescript-memory-kata
angular-kata$ npm install
```

If everything goes well you now have a ready to be developed typescript project!

### 2. Let's create your first entity

During all your developments, I suggest you to run the task `npm test`in background.
As we are using AngularJs for our kata, I provide AngularJs specific declarations. You
can focus on Typescript but if you meet difficulties feel free to create an
[issue](https://github.com/sichida/angularjs-typescript-memory-kata/issues/new).

First of all, we need a card component. To do so, you need to implement tests located in
`src/features/card/card.spec.ts` and then make tests pass by implementing _Card_ entity
located in `src/features/card/card.component.ts`.

Once your component is created, you can test it by modifying _MemoryController_
(_src/features/memory/memory.controller.ts_):
```typecript
import {Card} from '../card/card.component.ts';
export class MemoryController {
    card: Card;
    constructor() {
        this.card:Card = new Card('/src/assets/cards-260/1.png');
    }
}
```

and its view (_src/features/memory/memory.view.html_)
```html
<card data="ctrl.card" ng-click="ctrl.card.toggleState()"></card>
```

Now run the command line `npm start`and check you have a card displayed at
http://localhost:8080/#/.
