import './memory.css';
import angular from 'angular';
import {Card, CardState} from '../card/card.component.ts';
import {allCards} from '../card/card.service.ts';

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
}