import './memory.css';
import {Card} from '../card/card.component.ts';
import {card1, cards4x4} from '../../services/card.service.ts';

export class MemoryController {
    hello: string = 'Hello World!';
    card: Card;
    
    constructor() {
        this.card = card1;
        this.cards = cards4x4;
    }
}