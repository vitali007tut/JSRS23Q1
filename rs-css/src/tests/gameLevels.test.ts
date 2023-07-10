import Levels from '../components/gameLevels';

test('Quantity of levels more or equal ten', () => {
    const levels = new Levels();
    expect(levels.GameLevels.length).toBeGreaterThanOrEqual(10);
});
