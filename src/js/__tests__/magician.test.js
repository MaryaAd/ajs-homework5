import Magician from '../magician.js';

test('New Magician', () => {
  const magician = new Magician('Magy');
  expect(magician).toEqual({
      name: 'Magy',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
  });
});