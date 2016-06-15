import {MemoryController} from './memory.controller.ts';

describe('MemoryController', () => {
  it('has a `cards` attribute defined', () => {
    expect(new MemoryController().cards).toBeDefined(;
  });
});
