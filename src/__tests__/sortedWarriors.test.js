import sortedWarriors from '../sortedWarriors';

test('sort warriors by health correctly', () => {
  expect(sortedWarriors(
    [
      { name: 'мечник', health: 10 },
      { name: 'мечник', health: 100 },
      { name: 'лучник', health: 80 },
    ],
  ))
    .toEqual(
      [
        { name: 'мечник', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ],
    );
});
