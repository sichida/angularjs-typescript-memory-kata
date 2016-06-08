import {BoardComponentController} from './board.component.ts';

describe('BoardComponentController', () => {
  it('should initiate a Board attribute of the given size', () => {
    const controller = BoardComponentController.call({rows: 3, cols: 6});
    expect(controller).toBeDefined();
  });
});
