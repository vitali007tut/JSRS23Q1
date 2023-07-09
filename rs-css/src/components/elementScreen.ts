import { createElement } from './utils';

export default class ElementScreen {
    public figures: HTMLElement;
    public description: HTMLElement;
    // `private` пока не получается, т.к. они используются в app.ts

    constructor() {
        this.figures = createElement('div', 'figures');
        this.description = createElement('div', 'description');
    }

    public start(): HTMLElement {
        const main: HTMLElement = createElement('div', 'main');
        const mainTittle: HTMLElement = createElement('h1', 'h1', 'RSS-CSS Selectors');
        main.appendChild(mainTittle);
        main.appendChild(this.description);
        main.appendChild(this.figures);
        return main;
    }
}
