import GameLevelScreen from './gameLevelScreen';
import { createElement } from './utils';

export default class CodeScreen {
    public viewerCode: HTMLElement;
    constructor() {
        this.viewerCode = createElement('div', 'codeView');
    }
    public start(): HTMLElement {
        const htmlVier: HTMLElement = createElement('div', 'html-viewer');
        const viewerTittle = createElement('h4', 'viewer-tittle', 'HTML Viewer');
        new GameLevelScreen().viewCodeLevel(this.viewerCode);
        htmlVier.appendChild(viewerTittle);
        htmlVier.appendChild(this.viewerCode);

        return htmlVier;
    }
}
