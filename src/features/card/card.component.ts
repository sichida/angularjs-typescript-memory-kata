import ng from 'angular';
import view from './card.view.html';

export const DEFAULT_STATE: string = 'HIDDEN';
export const HIDDEN_STATE: string = DEFAULT_STATE;
export const SHOWN_STATE: string = 'SHOWN';
export const DEFAULT_IMAGE_URL: string = 'http://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg';

export class Card {
    state: string;
    hiddenPicture: string;
    image: string;

    constructor() {
        this.state = DEFAULT_STATE;
        this.hiddenPicture = DEFAULT_IMAGE_URL;
    }

    display(): void {
        this.state = SHOWN_STATE;
    }

    hide(): void {
        this.state = HIDDEN_STATE;
    }
    
    toggleState(): void {
        if (this.state == HIDDEN_STATE) {
            this.display();
        } else {
            this.hide();
        }
    }
}

export class CardComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;

    constructor() {
        this.bindings = {
            image: '@'
        };
        this.controller = Card;
        this.template = view;
    }
}