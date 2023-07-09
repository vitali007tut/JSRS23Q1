import { GameLevelType } from './base';
import Levels from './gameLevels';
import { createElement, createImgElement } from './utils';

export default class GameLevelScreen {
    constructor() {
        this.helpButton = createElement('a', 'bth-help', 'HELP');
    }

    private ELEMENT_HOVERED_CLASS = 'hovered';
    private readonly FIRST_LEVEL = 0;
    public readonly levels = new Levels();
    private level: string | null = localStorage.getItem('level');
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
            elementFigure.addEventListener('mouseover', () => {
                elementFigure.classList.add(this.ELEMENT_HOVERED_CLASS);
                const floatElement = createElement('div', 'floatTip');
                elementFigure.before(floatElement);
                floatElement.innerText = `${this.levels.GameLevels[this.actualLevel].code[index]}`;
                floatElement.style.display = 'inline';
                document.querySelector(`.line.\\3${index}`)?.classList.add(this.ELEMENT_HOVERED_CLASS);
            });
            elementFigure.addEventListener('mouseout', () => {
                elementFigure.classList.remove(this.ELEMENT_HOVERED_CLASS);
                document.querySelector('.floatTip')?.remove();
                document.querySelector(`.line.\\3${index}`)?.classList.remove(this.ELEMENT_HOVERED_CLASS);
            });
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
        localStorage.setItem('level', '0');
        localStorage.setItem('complete levels', JSON.stringify([]));
        this.actualLevel = 0;
        this.setActiveLevel(this.actualLevel);
        const codeView: HTMLElement | null = document.querySelector('.codeView');
        if (codeView) this.viewCodeLevel(codeView);
        const figuresView: HTMLElement | null = document.querySelector('.figures');
        if (figuresView) this.viewElements(figuresView);
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
            const levelFromStorage = localStorage.getItem('complete levels');
            if (levelFromStorage) completeLevels = JSON.parse(levelFromStorage);
            if (completeLevels.includes(index)) liItem.classList.add('complete');
            this.gameLevelElementList.push(liItem);
            if (this.levels.GameLevels[index].rightAnswer === this.getRightAnswer()) {
                liItem.classList.add('active-level');
            }
            listContainer.appendChild(liItem);
            liItem.addEventListener('click', () => {
                this.setActiveLevel(index);
                const tittleLevel = this.levels.GameLevels[index].title;
                localStorage.setItem('level', index.toString());
                this.levels.GameLevels.forEach((item) => {
                    if (item.title === tittleLevel) {
                        this.actualLevel = index;
                        const codeView: HTMLElement | null = document.querySelector('.codeView');
                        if (codeView) this.viewCodeLevel(codeView);
                        const figuresView: HTMLElement | null = document.querySelector('.figures');
                        if (figuresView) this.viewElements(figuresView);
                        const descriptionElement: HTMLElement | null = document.querySelector('.description');
                        if (descriptionElement) this.viewDescription(descriptionElement);
                    }
                });
            });
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
            const figureHovered: HTMLElement | null = document.querySelector(`.figure.\\3${index}`);
            figureHovered?.classList.add(this.ELEMENT_HOVERED_CLASS);
            if (figureHovered) {
                const floatElement = this.createTooltip(figureHovered);
                this.setActiveClassOnHoveredElement(floatElement, index);
            }
        });
    }
    private createTooltip(figureHovered: HTMLElement): HTMLElement {
        const floatElement = createElement('div', 'floatTip');
        figureHovered?.before(floatElement);
        return floatElement;
    }
    private setActiveClassOnHoveredElement(floatElement: HTMLElement, index: number) {
        floatElement.innerText = `${this.levels.GameLevels[this.actualLevel].code[index]}`;
        floatElement.style.display = 'inline';
    }
    private removeTooltip(codeLineElement: HTMLElement, index: number) {
        codeLineElement.addEventListener('mouseout', () => {
            this.removeActiveClassFromHoveredElement(index);
            document.querySelector('.floatTip')?.remove();
        });
    }
    private removeActiveClassFromHoveredElement(index: number) {
        const figureHovered = document.querySelector(`.figure.\\3${index}`);
        figureHovered?.classList.remove(this.ELEMENT_HOVERED_CLASS);
    }
}
