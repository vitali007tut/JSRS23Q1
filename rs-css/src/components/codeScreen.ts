import GameLevelScreen from "./gameLevelScreen";
import { createElement } from "./utils";


export default class CodeScreen {
  public viewerCode: HTMLElement;
  public start(): HTMLElement {
    const htmlVier: HTMLElement = createElement('div', 'html-viewer')
    const viewerTittle = createElement('h4', 'viewer-tittle', 'HTML Viewer');
    this.viewerCode = createElement('div', 'codeView');
    new GameLevelScreen().viewCodeLevel(this.viewerCode);
    htmlVier.appendChild(viewerTittle);
    htmlVier.appendChild(this.viewerCode);

    return htmlVier;
  }


}