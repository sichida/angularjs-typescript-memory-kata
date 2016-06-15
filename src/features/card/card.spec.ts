import {CardState, DEFAULT_IMAGE_URL, Card} from './card.component.ts';

describe('Card', () => {
  it('should have a state attribute', () => {
    expect(new Card().state).toBeDefined();
  });
  it('should have a hidden picture attribute', () => {
    expect(new Card().hiddenImageUrl).toBeDefined();
    expect(new Card().hiddenImageUrl).toEqual(DEFAULT_IMAGE_URL);
  });
  it('should be hidden by default', () => {
    expect(new Card().state).toEqual(CardState.Hidden);
  });
  it('should have a constructor with image', () => {
    const card = new Card('https://pixabay.com/static/uploads/photo/2014/04/20/12/30/thumb-328420_640.jpg');
    expect(card.imageUrl).toBeDefined();
    expect(card.imageUrl).toEqual('https://pixabay.com/static/uploads/photo/2014/04/20/12/30/thumb-328420_640.jpg');
  });
  describe('state', () => {
    it('should be toggled to \'SHOWN\'', () => {
      const card = new Card();
      expect(card.state).toEqual(CardState.Hidden);
      card.display();
      expect(card.state).toEqual(CardState.Shown);
    });
    it('should be toggled to \'HIDDEN\'', () => {
      const card = new Card();
      expect(card.state).toEqual(CardState.Hidden);
      card.display();
      expect(card.state).toEqual(CardState.Shown);
      card.hide();
      expect(card.state).toEqual(CardState.Hidden);
    });
    it('should be toggled', () => {
      const card = new Card();
      expect(card.state).toEqual(CardState.Hidden);
      card.toggleState();
      expect(card.state).toEqual(CardState.Shown);
      card.toggleState();
      expect(card.state).toEqual(CardState.Hidden);
    });
  });
  describe('isHidden', () => {
    it('should respond true', () => {
      const card = new Card();
      expect(card.isHidden()).toEqual(true);
    });
    it('should respond false', () => {
      const card = new Card();
      card.toggleState();
      expect(card.isHidden()).toEqual(false);
    });
  });
  describe('isShown', () => {
    it('should respond false', () => {
      const card = new Card();
      expect(card.isShown()).toEqual(false);
    });
    it('should respond true', () => {
      const card = new Card();
      card.toggleState();
      expect(card.isShown()).toEqual(true);
    });
  });
});
