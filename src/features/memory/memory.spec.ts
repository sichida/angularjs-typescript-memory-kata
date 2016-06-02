import {MemoryController} from './memory.controller.ts';

describe('MemoryController', () => {
  it('has a `hello` attribute containing "Hello World!"', () => {
    expect(new MemoryController().hello).toEqual('Hello World!');
  });
});
