import boardTemplate from './board.view.html';
import {Card} from '../card/card.component.ts';

const generateRow = function(colsCount: Number): Card[] {
    return Array.apply(null, {length: 4}).map(() => new Card(''));
}

export class WrongNumberOfCardsError extends Error {
    constructor(message) {
        super(message);
        this.message = message || 'Unable to render a board with a wrong number of elements!';
    }
};

export interface BoardApi {
    start: () => void;
};

export class BoardComponentController {
    private cols: number;
    private rows: number;
    private rawCards: Array<Card>;
    private cards: Array<Array<Card>>;

    $onInit() {
        if (this.rows && this.cols && this.rawCards && this.rows * this.cols !== this.rawCards.length) {
            throw new WrongNumberOfCardsError('Wrong number of cards');
        }
        this.cards = [];
        for (var i = 0; i < this.cols; i++) {
            let row: Card[] = [];
            for (var j = 0; j < this.rows; j++) {
                row.push(this.rawCards[i * this.rows + j]);
            }
            this.cards.push(row);
        }
    }

    onCardClicked(card: Card): void {
        card.toggleState();
    }
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