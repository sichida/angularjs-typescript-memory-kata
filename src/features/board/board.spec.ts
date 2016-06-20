import angular from 'angular';
import 'angular-mocks';
import {BoardComponentDefinition} from './board.component.ts';
import {allCards} from '../card/card.service.ts';
import {CardState} from '../card/card.component.ts';

describe('BoardComponentController', () => {
  let $scope, $componentController;

  beforeEach(module('memory'));
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
    const component = $componentController('board', null, $scope);
    expect(component).toBeDefined();
    expect(component.rows).toEqual($scope.rows);
    expect(component.cols).toEqual($scope.cols);
    expect(component.cards).toEqual($scope.cards);
  });

  it('should transform the given cards list into a two dimensional array', () => {
    const component = $componentController('board', null, $scope);
    component.$onInit();
    expect(component.cards).toEqual([[allCards[0], allCards[1]], [allCards[1], allCards[0]]]);
  });

  it(`should throw an exception if the given dimensions don't match the number of cards`, () => {
    $scope.rows = 3;
    const component = $componentController('board', null, $scope);
    expect(component.$onInit).toThrow();
  });

  it('should toggle only the clicked card', () => {
    const component = $componentController('board', null, $scope);
    component.$onInit();
    component.onCardClicked(component.cards[0][0]);
    expect(component.cards[0][0].state).toEqual(CardState.Shown);
    expect(component.cards[0][1].state).toEqual(CardState.Hidden);
    expect(component.cards[1][0].state).toEqual(CardState.Hidden);
    expect(component.cards[1][1].state).toEqual(CardState.Hidden);
  });
});
