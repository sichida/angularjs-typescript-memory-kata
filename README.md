# AngularJS kata using TypeScript

This kata aims to create a 
[_Memory_ game](https://en.wikipedia.org/wiki/Concentration_%28game%29).
We decided to write an [AngularJs](https://angularjs.org/) application with
[Typescript](https://www.typescriptlang.org/) language.

The main advantages to choose this language are:
- having a typed language which can avoid runtime issues
- having a testable application
- learn about Typescript before Angular 2 is out of beta 

You should follow all steps describe [here](#steps) to use this kata properly.
The running application with full solutions is available in the branch
[running_application](https://github.com/sichida/angularjs-typescript-memory-kata/tree/running_application).

## [Memory game - rules](#memory-game-rules)
Rules are very simple: you need to find all duplicated cards.
You need to select 2 cards and, if they are the same, you get points; if not,
they hide and you must remember their location for future matches. 

## [Requirements](#requirements)

In order to run this kata on your working station you need:
- [node.js](https://nodejs.org/en/)
- [jspm](http://jspm.io/)
    - You need to install [the beta version](http://jspm.io/0.17-beta-guide/index.html)
- Knowledgment in AngularJs. The aim of this kata is to learn Typescript, not AngularJs.

## [Steps](#steps)
### [1. Let's verify your workstations](#lets-verify-your-workstation)

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

### [2. Let's create your first entity](#lets-create-your-first-entity)

During all your developments, I suggest you to run the task `npm test` in background.
As we are using AngularJs for our kata, I provide AngularJs specific declarations. You
can focus on Typescript but if you meet difficulties feel free to create an
[issue](https://github.com/sichida/angularjs-typescript-memory-kata/issues/new).
We provide a set of cards with image data to avoid you the painfulness of searching
images among the net (in the file `src/features/card/card.service.ts`).
All cards are initialized using _Card_ component. 

First of all, we need a card component. To do so, you need to implement tests located in
`src/features/card/card.spec.ts` and then make tests pass by implementing _Card_ entity
located in `src/features/card/card.component.ts`.

Once your component is created, you can test it by modifying _MemoryController_
(_src/features/memory/memory.controller.ts_):
```javacript
import './memory.css';
import {Card} from '../card/card.component.ts';
export class MemoryController {
    card: Card;
    constructor() {
        this.card = new Card('/src/assets/cards-260/1.png');
    }
}
```

and its view (_src/features/memory/memory.view.html_)
```html
<card data="$ctrl.card" ng-click="$ctrl.card.toggleState()"></card>
```

Now run the command line `npm start`and check you have a card displayed at
http://localhost:8080/#/.

### [3. I need a board!](#i-need-a-board)

Now that we have a card component we want a board to display all cards.
Once again, you will need to write tests in `src/features/board/board.spec.ts` and
implement the _Board_ in `src/features/board/board.component.ts`

Once your component is ready and all tests are passed, you can update your
_MemoryController_ (_src/features/memory/memory.controller.ts_) with the following code:
```javacript
import './memory.css';
import {Card, CardState} from '../card/card.component.ts';
import {allCards} from '../card/card.service.ts';
import angular from 'angular';

export class MemoryController {
    cards: Array<Card>;
    rows: number;
    cols: number;
    
    constructor() {
        this.rows = 3;
        this.cols = 6;
        this.cards = [
            allCards[0], allCards[1], allCards[1], allCards[3], allCards[4], allCards[5],
            allCards[4], allCards[0], allCards[6], allCards[3], allCards[7], allCards[2],
            allCards[6], allCards[7], allCards[8], allCards[8], allCards[5], allCards[2]
        ].map(card => angular.copy(card));
    }
}```

and its view (_src/features/memory/memory.view.html_)
```html
<board rows="{{$ctrl.rows}}" cols="{{$ctrl.cols}}" cards="$ctrl.cards"></board>
```

### [4. Let's rulez](#lets-rules)

Finally, all you need to do it implementing rules. 