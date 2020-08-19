import getSpecialAttack from '../app';

const obj = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const resArr = [
  {
    id: 8,
    name: 'Двойной выстрел',
    description: 'Двойной выстрел наносит двойной урон',
    icon: 'http://...',
  },
  {
    id: 9,
    name: 'Нокаутирующий удар',
    description: 'Описание недоступно',
    icon: 'http://...',
  },
];

describe('getSpecialAttack tests: ', () => {
  test.each([
    ['input is valid', obj, resArr],
  ])(
    ('-> %s'),
    (name, inputData, expectation) => {
      const res = getSpecialAttack(inputData);

      expect(res).toEqual(expectation);
    },
  );
});
