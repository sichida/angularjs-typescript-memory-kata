import {CardState, DEFAULT_IMAGE_URL, Card} from './card.component.ts';

describe('Card', () => {
  it('should be hidden by default', () => {
    /*
    * TODO: #1
    * add state attibute with default value set to hidden
    * tips: `state` should be of type _CardState_
    */
  });
  it('should have a hidden picture attribute', () => {
    /* 
    * TODO: #2 
    * A card should have a hidden image url. It should be customizable but
    * we also should have a default image when constructing a card
    * tips: expected attribute: `hiddenImageUrl`;
    */
  });
  it('should have a constructor with image', () => {
    /* 
    * TODO: #3
    * We should be able to create a card by giving an url within the constructor.
    * This image represents the shown face of the card.
    * We also should be able to customize the hidden face as well.
    * tips: expected attribute: `imageUrl`;
    */    
  });
  describe('state', () => {
    it('should be toggled to `SHOWN`', () => {
      // TODO: #4 we should have a method `display` that toggle state to shown state
    });
    it('should be toggled to`HIDDEN`', () => {
      // TODO: #5 we should have a method `hide` that toggle state to hidden state
    });
    it('should be toggled', () => {
      // TODO: #6 we should have a method `toggleState` that toggle card state
    });
  });
  describe('isHidden', () => {
    it('should respond true', () => {
      // TODO: #7 we should have a method `isHidden` that tells if the card is hidden
    });
    it('should respond false', () => {
      // TODO: #8 Check if method `isHidden` works in any case
    });
  });
  describe('isShown', () => {
    it('should respond false', () => {
      // TODO: #9 we should have a method `isShown` that tells if the card is shown
    });
    it('should respond true', () => {
      // TODO: #10 Check if method `isShown` works in any case
    });
  });
});
