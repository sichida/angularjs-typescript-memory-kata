import './board.css';
import boardTemplate from './board.view.html';
import {Card} from '../card/card.component.ts';

export class BoardComponentController {
    // TODO: #3 Create board component
};

export const BoardComponentDefinition = {
    template: boardTemplate,
    controller: () => new BoardComponentController,
    bindings: {
        api: '=',
        rows: '@',
        cols: '@',
        rawCards: '<cards'
    }
};