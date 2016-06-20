import ng from 'angular';
import view from './card.view.html';
import './card.css';

export const DEFAULT_IMAGE_URL: string = 'https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg';

/**
 * This enum defines states of cards
 */
export enum CardState {
    Hidden,
    Shown
}

export const DEFAULT_STATE: CardState = CardState.Hidden;

/**
 * This class represents a Card
 */
export class Card {
    /** The state of the card. */
    state: CardState;
    /** The picture to display in hidden state. */
    hiddenImageUrl: string;
    /** The picture to display in shown state. */
    imageUrl: string;

    constructor(private imageUrl:string, private hiddenImageUrl:string = DEFAULT_IMAGE_URL) {
        this.state = DEFAULT_STATE;
    }

    display(): void {
        this.state = CardState.Shown;
    }

    hide(): void {
        this.state = CardState.Hidden;
    }
    
    toggleState(): void {
        if (this.state == CardState.Hidden) {
            this.display();
        } else {
            this.hide();
        }
    }
    
    isHidden():boolean {
        return this.state == CardState.Hidden;
    }

    isShown():boolean {
        return this.state == CardState.Shown;
    }

}

class ClassController {
    constructor() {
    }
}

export const CardComponentDefinition: ng.IComponentOptions = {
    bindings: {
        card: '=data'
    },
    template: view,
    controller: ClassController,
    controllerAs: 'ctrl'
};