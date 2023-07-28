import { createElement } from '../utils/utils';

export default class MainView {
    private main: HTMLElement = createElement({ tag: 'main', classList: ['main'] });
    public create(): HTMLElement {
        return this.main;
    }

    public setContent(content: HTMLElement): void {
        const htmlElement = this.main;
        while (htmlElement.firstElementChild) {
            htmlElement.firstElementChild.remove();
        }
        this.main.append(content);
    }
}
