import { GameLevelType } from './base';
import Levels from './gameLevels';
import GameLevelsStore from './gameLevelsStore';
import { createElement, createImgElement, findSelectorWrapper } from './utils';

export default class GameLevelScreen {
    constructor() {
        this.helpButton = createElement('a', 'bth-help', 'HELP');
    }

    private ELEMENT_HOVERED_CLASS = 'hovered';
    private readonly FIRST_LEVEL = 0;
    public readonly levels = new Levels();
    private level: string | null = GameLevelsStore.getInstance().getLevelFromLocalStorage();
    public actualLevel: number = this.level ? +this.level : this.FIRST_LEVEL;
    private gameLevelElementList: HTMLElement[] = [];
    public helpButton: HTMLElement;
    public completeLevels: number[] = [];

    public start(): HTMLElement {
        const element: HTMLElement = createElement('div', 'side');
        element.appendChild(createElement('h2', 'level-tittle', 'Levels'));
        const gameLevelsContainer: HTMLElement = document.createElement('ul');
        this.createGameLevels(gameLevelsContainer);
        element.appendChild(gameLevelsContainer);
        element.appendChild(this.helpButton);
        const resetBtn: HTMLElement = createElement('a', 'reset', 'Reset Progress');
        element.appendChild(resetBtn);
        resetBtn.addEventListener('click', () => this.resetGame());
        return element;
    }

    public viewCodeLevel(element: HTMLElement): HTMLElement {
        element.innerHTML = '';
        const startLine = createElement('span', 'startLine', '<div class="table">');
        const endLine = createElement('span', 'endLine', '</div>');
        element.appendChild(startLine);
        this.printLevelCode(element);
        element.appendChild(endLine);
        return element;
    }

    public viewElements(element: HTMLElement): HTMLElement {
        element.innerHTML = '';
        const arrFigures: GameLevelType['figures'] = this.levels.GameLevels[this.actualLevel].figures;
        arrFigures.forEach((figure, index) => {
            const elementFigure = createImgElement(figure.size, `./asserts/${figure.name}.svg`);
            elementFigure.classList.add(index.toString());
            element.appendChild(elementFigure);
            if (figure.inner) {
                // only for 11th level
                const innerElement = createElement('div', `paper`);
                innerElement.classList.add('target');
                elementFigure.before(innerElement);
            }
            if (this.getTarget().includes(index)) {
                elementFigure.classList.add('target');
            }
            this.mouseOnFigure(elementFigure, index);
            this.mouseOutFigure(elementFigure, index);
        });
        return element;
    }

    public viewDescription(element: HTMLElement): HTMLElement {
        element.innerHTML = '';
        element.innerHTML = this.levels.GameLevels[this.actualLevel].description;
        return element;
    }
    public getLevelsLines(): string[] {
        return this.levels.GameLevels[this.actualLevel].code;
    }
    public getRightAnswer(): string {
        return this.levels.GameLevels[this.actualLevel].rightAnswer;
    }
    public getActualLevelLiElement(): HTMLElement {
        return this.gameLevelElementList[this.actualLevel];
    }
    public getTarget(): number[] {
        return this.levels.GameLevels[this.actualLevel].target;
    }
    public setActiveLevel(index: number): void {
        this.gameLevelElementList.forEach((elemLi) => elemLi.classList.remove('active-level'));
        this.gameLevelElementList[index].classList.add('active-level');
    }
    public gameIsComplete(): boolean {
        const completeLevels = document.querySelectorAll('.complete');
        return completeLevels.length === this.gameLevelElementList.length;
    }
    private resetGame(): void {
        console.log('Reset Progress');
        GameLevelsStore.getInstance().setLevelInStorage('0');
        GameLevelsStore.getInstance().setCompleteLevelsInStorage(JSON.stringify([]));
        this.actualLevel = 0;
        this.setActiveLevel(this.actualLevel);
        const codeView: HTMLElement = findSelectorWrapper('.codeView');
        this.viewCodeLevel(codeView);
        const figuresView: HTMLElement = findSelectorWrapper('.figures');
        this.viewElements(figuresView);
        const completeLevels = document.querySelectorAll('.complete');
        completeLevels.forEach((level) => level.classList.remove('complete'));
    }
    public quantityTasks(): number {
        return this.gameLevelElementList.length;
    }
    private createGameLevels(listContainer: HTMLElement): void {
        this.levels.GameLevels.forEach((key, index) => {
            const liItem = createElement('li', 'li-item', `${index + 1}  ${this.levels.GameLevels[index].title}`);
            let completeLevels: number[] = [];
            const levelFromStorage = GameLevelsStore.getInstance().getCompleteLevelsFromStorage();
            completeLevels = JSON.parse(levelFromStorage);
            if (completeLevels.includes(index)) liItem.classList.add('complete');
            this.gameLevelElementList.push(liItem);
            if (this.levels.GameLevels[index].rightAnswer === this.getRightAnswer()) {
                liItem.classList.add('active-level');
            }
            listContainer.appendChild(liItem);
            this.listenerForClickOnLiItem(liItem, index);
        });
    }
    private printLevelCode(element: HTMLElement) {
        this.levels.GameLevels[this.actualLevel].code.forEach((codeLine, index) => {
            const codeLineElement = createElement('div', 'line', codeLine);
            codeLineElement.classList.add(index.toString());
            const figureName = this.levels.GameLevels[this.actualLevel].figures[index].name;
            codeLineElement.classList.add(figureName);
            element.appendChild(codeLineElement);
            this.mouseoverOnCodeLineElement(codeLineElement, index);
            this.removeTooltip(codeLineElement, index);
        });
    }
    private mouseoverOnCodeLineElement(codeLineElement: HTMLElement, index: number) {
        codeLineElement.addEventListener('mouseover', () => {
            const figureHovered: HTMLElement = findSelectorWrapper(`.figure.\\3${index}`);
            figureHovered.classList.add(this.ELEMENT_HOVERED_CLASS);
            const floatElement = this.createTooltip(figureHovered);
            this.setActiveClassOnHoveredElement(floatElement, index);
        });
    }
    private createTooltip(figureHovered: HTMLElement): HTMLElement {
        const floatElement = createElement('div', 'floatTip');
        figureHovered.before(floatElement);
        return floatElement;
    }
    private setActiveClassOnHoveredElement(floatElement: HTMLElement, index: number) {
        floatElement.innerText = `${this.levels.GameLevels[this.actualLevel].code[index]}`;
        floatElement.style.display = 'inline';
    }
    private removeTooltip(codeLineElement: HTMLElement, index: number) {
        codeLineElement.addEventListener('mouseout', () => {
            this.removeActiveClassFromHoveredElement(index);
            this.removeTipElement();
        });
    }
    private removeActiveClassFromHoveredElement(index: number) {
        const figureHovered: HTMLElement = findSelectorWrapper(`.figure.\\3${index}`);
        figureHovered.classList.remove(this.ELEMENT_HOVERED_CLASS);
    }
    private mouseOnFigure(elementFigure: HTMLElement, index: number) {
        elementFigure.addEventListener('mouseover', () => {
            elementFigure.classList.add(this.ELEMENT_HOVERED_CLASS);
            const floatElement = this.createTooltip(elementFigure);
            this.setActiveClassOnHoveredElement(floatElement, index);
            this.codeLineHovered(index);
        });
    }
    private codeLineHovered(index: number) {
        const lineElement = findSelectorWrapper(`.line.\\3${index}`);
        lineElement.classList.add(this.ELEMENT_HOVERED_CLASS);
    }
    private mouseOutFigure(elementFigure: HTMLElement, index: number) {
        elementFigure.addEventListener('mouseout', () => {
            elementFigure.classList.remove(this.ELEMENT_HOVERED_CLASS);
            this.removeTipElement();
            this.removeHoverFromLineElement(index);
        });
    }
    private removeTipElement() {
        const floatTipElement = findSelectorWrapper('.floatTip');
        floatTipElement.remove();
    }
    private removeHoverFromLineElement(index: number) {
        const lineElement = findSelectorWrapper(`.line.\\3${index}`);
        lineElement.classList.remove(this.ELEMENT_HOVERED_CLASS);
    }
    private listenerForClickOnLiItem(liItem: HTMLElement, index: number) {
        liItem.addEventListener('click', () => {
            this.setActiveLevel(index);
            const tittleLevel = this.levels.GameLevels[index].title;
            GameLevelsStore.getInstance().setLevelInStorage(index.toString());
            this.levels.GameLevels.forEach((item) => {
                if (item.title === tittleLevel) {
                    this.actualLevel = index;
                    const codeView: HTMLElement = findSelectorWrapper('.codeView');
                    this.viewCodeLevel(codeView);
                    const figuresView: HTMLElement = findSelectorWrapper('.figures');
                    this.viewElements(figuresView);
                    const descriptionElement: HTMLElement = findSelectorWrapper('.description');
                    this.viewDescription(descriptionElement);
                }
            });
        });
    }
}
