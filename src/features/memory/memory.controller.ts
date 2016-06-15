import './memory.css';
import {Card} from '../card/card.component.ts';
import {allCards} from '../../services/card.service.ts';

export class MemoryController {
    cards: Array<Card>;
    
    constructor() {
        this.cards = allCards;
    }
}