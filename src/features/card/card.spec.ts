import {DEFAULT_STATE, HIDDEN_STATE, SHOWN_STATE, DEFAULT_IMAGE_URL, Card} from './card.component.ts';

describe('Card', () => {
  it('should have a state attribute', () => {
    expect(new Card().state).toBeDefined();
  });
  it('should have a hidden picture attribute', () => {
    expect(new Card().hiddenPicture).toBeDefined();
    expect(new Card().hiddenPicture).toEqual(DEFAULT_IMAGE_URL);
  });
  it('should be hidden by default', () => {
    expect(new Card().state).toEqual(DEFAULT_STATE);
    expect(new Card().state).toEqual(HIDDEN_STATE);
  });
  describe('state', () => {
    it('should be toggled to \'SHOWN\'', () => {
      const card = new Card();
      expect(card.state).toEqual(DEFAULT_STATE);
      card.display();
      expect(card.state).toEqual(SHOWN_STATE);
    });
    it('should be toggled to \'HIDDEN\'', () => {
      const card = new Card();
      expect(card.state).toEqual(DEFAULT_STATE);
      card.display();
      expect(card.state).toEqual(SHOWN_STATE);
      card.hide();
      expect(card.state).toEqual(HIDDEN_STATE);
    });
    it('should be toggled', () => {
      const card = new Card();
      expect(card.state).toEqual(DEFAULT_STATE);
      card.toggleState();
      expect(card.state).toEqual(SHOWN_STATE);
      card.toggleState();
      expect(card.state).toEqual(HIDDEN_STATE);
    });
  });
});
