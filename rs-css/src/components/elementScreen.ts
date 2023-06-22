import GameLevelScreen from "./gameLevelScreen";
import { createElement, createImgElement } from "./utils";

export default class ElementScreen {
  public figures: HTMLElement;

  public start(): HTMLElement {
    const main: HTMLElement = createElement('div', 'main');
    const mainTittle: HTMLElement = createElement('h1', 'h1', 'RSS-CSS Selectors')
    main.appendChild(mainTittle);
    this.figures = createElement('div', 'figures');
    new GameLevelScreen().viewElements(this.figures);
    main.appendChild(this.figures);
    return main;
  }
  
  public figureRum: HTMLImageElement = createImgElement('rum', './asserts/rum.svg');
  public figureFlag: HTMLImageElement = createImgElement('flag', './asserts/flag.svg');
  public figureKing: HTMLImageElement = createImgElement('king', './asserts/king.svg');
  public figureHat: HTMLImageElement = createImgElement('hat', './asserts/hat.svg');
  public figureCompass: HTMLImageElement = createImgElement('compass', './asserts/compass.svg');
  public figureQueen: HTMLImageElement = createImgElement('queen', './asserts/queen.svg');
  public figurePawn: HTMLImageElement = createImgElement('pawn', './asserts/pawn.svg');
}