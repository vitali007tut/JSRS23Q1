import GameLevelScreen from "./gameLevelScreen";
import { createElement } from "./utils";


export default class CodeScreen {
  
  public start(): HTMLElement {
    const htmlVier: HTMLElement = createElement('div', 'html-viewer')
    const viewerTittle = createElement('h4', 'viewer-tittle', 'HTML Viewer');
    const viewerCode = createElement('div', 'codeView');
    new GameLevelScreen().viewCodeLevel(viewerCode);
    htmlVier.appendChild(viewerTittle);
    htmlVier.appendChild(viewerCode);

    return htmlVier;
  }


}