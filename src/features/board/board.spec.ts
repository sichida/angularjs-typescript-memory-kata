import angular from 'angular';
import 'angular-mocks';
import {BoardComponentDefinition} from './board.component.ts';
import {allCards} from '../card/card.service.ts';
import {CardState} from '../card/card.component.ts';

describe('BoardComponentController', () => {
  let $scope, $componentController;

  beforeEach(module('typescript-kata'));
  beforeEach(inject((_$componentController_) => $componentController = _$componentController_));
  beforeEach(() => $scope = {
    rows: 2,
    cols: 2,
    rawCards: [
      allCards[0], allCards[1],
      allCards[1], allCards[0]
    ].map(card => angular.copy(card))
  });

  it('should initiate a Board with the given attributes', () => {
    /*
    * TODO: #12
    * We should create a component based on the $scope and check
    * rows, cols and cards are correctly initialized
    * tips: const component:BoardComponentController = $componentController('board', null, $scope);
    */
  });

  it('should transform the given cards list into a two dimensional array', () => {
    /*
    * TODO: #13
    * The component should have a method `$onInit` that convert the one dimensional
    * rawCards attributes into a two dimensional array `cards`
    */
  });

  it(`should throw an exception if the given dimensions don't match the number of cards`, () => {
    /*
    * TODO: #14
    * The component should raise an exception in the method `$onInit` if the number of
    * cards if not enought based on given dimensions.
    * tips: $scope.rows = 3 before creating component
    */
  });

  it('should toggle only the clicked card', () => {
    /*
    * TODO: #15
    * The component should be able to toggle card state on click event
    * tips: add a mathod named `onCardClicked`
    */
  });
});
