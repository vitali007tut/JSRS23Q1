import CodeScreen from '../components/codeScreen';

test('Create element in constructor', () => {
    const codeScreen = new CodeScreen();
    expect(codeScreen.viewerCode.tagName).toBe('DIV');
    expect(codeScreen.viewerCode.className).toBe('codeView');
});

test('Create element in start function', () => {
    const codeScreen = new CodeScreen();
    expect(codeScreen.start()).toBeDefined();
});
