import {CardState, DEFAULT_IMAGE_URL, Card} from './card.component.ts';

describe('Card', () => {
  it('should have a state attribute', () => {
    // TODO: #2 add state attibute. It should be of type CardState
  });
  it('should have a hidden picture attribute', () => {
    /* 
    * TODO: #2 
    * A card should have a hidden image url. It should be customizable but
    * we also should have a default image when constructing a card
    */
  });
  it('should be hidden by default', () => {
    // TODO: #2 default state should be hidden
  });
  it('should have a constructor with image', () => {
    /* 
    * TODO: #2 
    * We should be able to create a card by giving an url within the constructor.
    * This image represents the shown face of the card.
    * We also should be able to customize the hidden face as well.
    */    
  });
  describe('state', () => {
    it('should be toggled to \'SHOWN\'', () => {
      // TODO: #2 we should have a method `display` that toggle state to shown state
    });
    it('should be toggled to \'HIDDEN\'', () => {
      // TODO: #2 we should have a method `hide` that toggle state to hidden state
    });
    it('should be toggled', () => {
      // TODO: #2 we should have a method `toggleState` that toggle card state
    });
  });
  describe('isHidden', () => {
    it('should respond true', () => {
      // TODO: #2 we should have a method `isHidden` that tells if the card is hidden
    });
    it('should respond false', () => {
      // TODO: #2 Check if method `isHidden` works in any case
    });
  });
  describe('isShown', () => {
    it('should respond false', () => {
      // TODO: #2 we should have a method `isShown` that tells if the card is shown
    });
    it('should respond true', () => {
      // TODO: #2 Check if method `isShown` works in any case
    });
  });
});
