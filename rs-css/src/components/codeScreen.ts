import GameLevelScreen from "./gameLevelScreen";
import { createElement } from "./utils";


export default class CodeScreen {
  
  public start(): HTMLElement {
    const htmlVier: HTMLElement = createElement('div', 'html-viewer')
    const viewerTittle = createElement('h4', 'viewer-tittle', 'HTML Viewer');
    const viewerCode = createElement('div', 'codeView');
    // const startLine = createElement('span', 'startLine', '<div class="table">');
    // const endLine = createElement('span', 'endLine', '</div>');

    // viewerCode.appendChild(startLine);

    // const levelCodes: string[] = GameLevelScreen.getLevelsLines();
    // for (let key in levelCodes) {
    //   viewerCode.appendChild(createElement('div', 'line', `${levelCodes[key]}`))
    // }
    new GameLevelScreen().viewCodeLevel(viewerCode);

    // viewerCode.appendChild(endLine);
    htmlVier.appendChild(viewerTittle);
    htmlVier.appendChild(viewerCode);

    return htmlVier;
  }
}