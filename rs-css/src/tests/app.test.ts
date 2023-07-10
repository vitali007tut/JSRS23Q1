import App from '../components/app';

test('App is creating', () => {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    document.body.appendChild(gridContainer);
    const app = new App();

    expect(app).toBeDefined();
});
