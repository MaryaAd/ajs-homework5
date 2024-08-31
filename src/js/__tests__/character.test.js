import Character from '../character.js';


test('New character with invalid name (too short)', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Invalid name length');
});

test('New character with invalid name (too long)', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('New character with invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});

test('Inflict damage to character', () => {
    const testChar = new Character('Bowy', 'Bowman');
    testChar.health = 50;
    testChar.attack = 25;
    testChar.defence = 25;
    testChar.damage(10);
    expect(testChar).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 42.5,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('The value of health cannot be negative', () => {
    const testChar = new Character('Bowy', 'Bowman');
    testChar.health = 50;
    testChar.attack = 10;
    testChar.defence = 10;
    testChar.damage(10);
    expect(testChar.health).toEqual(41);
});

test('Go to the next level', () => {
    const testChar = new Character('Bowy', 'Bowman');
    testChar.health = 50;
    testChar.attack = 10;
    testChar.defence = 10;
    testChar.levelUp();
    expect(testChar).toEqual({
        name: 'Bowy',
        type: 'Bowman',
        health: 100,
        level: 2,
        attack: 12,
        defence: 12,
    });
});

test('Go to the next level with zero health', () => {
    const testChar = new Character('Bowy', 'Bowman', 25, 25);
    testChar.health = 0;
    expect(() => testChar.levelUp()).toThrow(
        'You cannot raise the level with zero health',
    );
});

test('Character damage', () => {
    const testChar = new Character('Bowy', 'Bowman');
    testChar.defence = 10;
    testChar.damage(500);
    expect(testChar.health).toBe(0);
  });