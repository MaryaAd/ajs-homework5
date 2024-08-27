import Zombie from '../zombie.js';

test('New Zombie', () => {
  const zombie = new Zombie('Zomy');
  expect(zombie).toEqual({
      name: 'Zomy',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
  });
});