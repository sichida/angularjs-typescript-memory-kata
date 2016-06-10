import {Card} from '../card/card.component.ts';

export class MemoryController {
    hello: string = 'Hello World!';
    card: Card;
    
    constructor() {
        this.card = new Card('https://pixabay.com/static/uploads/photo/2014/04/20/12/30/thumb-328420_640.jpg');
        // this.card.imageUrl = 'https://pixabay.com/static/uploads/photo/2014/04/20/12/30/thumb-328420_640.jpg';
    }
}