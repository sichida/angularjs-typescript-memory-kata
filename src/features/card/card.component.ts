import ng from 'angular';
import view from './card.view.html';
import './card.css';

export const DEFAULT_IMAGE_URL: string = '/src/assets/question-mark.jpg';

/**
 * This enum defines states of cards
 */
export enum CardState {
    // TODO: #1 Add states
}

// TODO: #1 Define default state
export const DEFAULT_STATE: CardState = null;

/**
 * This class represents a Card
 */
export class Card {
    // TODO: Create card component
    constructor() {
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