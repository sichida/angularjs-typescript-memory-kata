import boardTemplate from './board.view.html';
import {Board} from './board.entity.ts';

export class OddNumberOfCardsError extends Error {
    constructor(message) {
        this.name = this.constructor.name;
        this.message = message || 'Unable to render a board with an odd number of elements!';
        super(this.message);
    }
};

export interface BoardApi {
    start: () => void;
};

export class BoardComponentController {
    private api: Object();
    private rows: number;
    private cols: number;
    private board: Board;

    constructor(): void {
        if (this.rows * this.cols % 2 !== 0) {
            throw new OddNumberOfCardsError();
        }
        this.board = this._initBoard();
    }

    _initBoard(rows: Number, cols: Number): Board {
        
    }
};

export const BoardComponentDefinition = {
    template: boardTemplate,
    controller: BoardComponentController,
    controllerAs: 'Board',
    bindings: {
        api: '=',
        rows: '@',
        cols: '@'
    }
};