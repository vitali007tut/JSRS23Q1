import { GameLevelType } from "./base";
import { createElement, createImgElement } from "./utils";

export default class GameLevelScreen {
  
  GameLevels: GameLevelType[] = [
    {
      title: 'Find pawn',
      rightAnswer: '.pawn',
      code: ['<pawn />', '<flag />', '<compass />', '<queen />'],
      figures: ['pawn', 'flag', 'compass', 'queen']
    },
    {
      title: 'Second',
      rightAnswer: '.king',
      code: ['<hat />', '<king />', '<flag />', '<rum />', '<compass />'],
      figures: ['hat', 'king', 'flag', 'rum', 'compass'],
    },
    {
      title: '333333333333',
      rightAnswer: '.rum',
      code: ['<pawn />', '<flag />', '<compass />', '<queen />', '<rum />'],
      figures: ['pawn', 'flag', 'compass', 'queen', 'rum']
    },
    {
      title: '4 compass',
      rightAnswer: '.compass',
      code: ['<hat />', '<king />', '<flag />', '<rum />', '<compass />'],
      figures: ['hat', 'king', 'flag', 'rum', 'compass'],
    },
  ]

  public actualLevel: number = 0;
  private liArray: HTMLElement[] = [];
  
  public start(): HTMLElement {
    const element: HTMLElement = createElement('div', 'side');
    element.appendChild(createElement('h2', 'level-tittle', 'Levels'));

    const olList: HTMLElement = document.createElement('ol');
    this.GameLevels.forEach((key, index) => {
      const liItem = createElement('li', 'li-item', this.GameLevels[index].title);
      this.liArray.push(liItem);
      if (this.GameLevels[index].rightAnswer === this.getRightAnswer()) {
        liItem.classList.add('active-level');
      }
      olList.appendChild(liItem);
      liItem.addEventListener('click', () => {
        this.setActiveLevel(index);
        const tittleLevel = liItem.innerHTML;
        this.GameLevels.forEach((element, index) => {
          if (element.title === tittleLevel) {
            this.actualLevel = index;
            const codeView: HTMLElement = document.querySelector('.codeView');
            this.viewCodeLevel(codeView);
            const figuresView: HTMLElement = document.querySelector('.figures');
            this.viewElements(figuresView);
          }
        })
      })
    })
    element.appendChild(olList);
    const resetBtn: HTMLElement = createElement('a', 'reset', 'Reset Progress');
    element.appendChild(resetBtn);
    resetBtn.addEventListener('click', () => {
      this.resetGame();
    })
    
    return element;
  }   
  
  public viewCodeLevel(element: HTMLElement): HTMLElement {
    element.innerHTML = '';
    const startLine = createElement('span', 'startLine', '<div class="table">');
    const endLine = createElement('span', 'endLine', '</div>');
    element.appendChild(startLine);
    this.GameLevels[this.actualLevel].code.forEach((codeLine, index) => {
      const codeLineElement = createElement('div', 'line', codeLine);
      const figureName = this.GameLevels[this.actualLevel].figures[index];
      codeLineElement.classList.add(figureName)
      element.appendChild(codeLineElement);
      codeLineElement.addEventListener('mouseover', () => {
        const figureHovered = codeLineElement.classList[1];
        const hoveredElement = document.querySelector(`.figure.${figureHovered}`);
        hoveredElement.classList.add('hovered');
        const floatElement = createElement('div', 'floatTip');
        hoveredElement.before(floatElement);
        floatElement.innerText = `<${figureHovered} />`;
        floatElement.style.display = 'inline';
      })
      codeLineElement.addEventListener('mouseout', () => {
        const figureHovered = codeLineElement.classList[1];
        document.querySelector(`.figure.${figureHovered}`).classList.remove('hovered');
        document.querySelector('.floatTip').remove();
      })
    })
    element.appendChild(endLine);
    return element;
  }

  public viewElements(element: HTMLElement): HTMLElement {
    element.innerHTML = '';
    const arrFigures: string[] = this.GameLevels[this.actualLevel].figures;
    arrFigures.forEach(figure => {
      const elementFigure = createImgElement(figure, `./asserts/${figure}.svg`);
      element.appendChild(elementFigure);
      if (figure === this.getRightAnswer().slice(1)) {
        elementFigure.classList.add('target');
      }

      elementFigure.addEventListener('mouseover', () => {
        elementFigure.classList.add('hovered');
        const floatElement = createElement('div', 'floatTip');
        elementFigure.before(floatElement);
        floatElement.innerText = `<${figure} />`;
        floatElement.style.display = 'inline';
      })
      elementFigure.addEventListener('mouseout', () => {
        elementFigure.classList.remove('hovered');
        document.querySelector('.floatTip').remove();
      })
    })
    return element;
  }

  public getLevelsLines(): string[] {
    return this.GameLevels[this.actualLevel].code;
  }
  public getRightAnswer(): string {
    return this.GameLevels[this.actualLevel].rightAnswer;
  }
  public getActualLevelLiElement(): HTMLElement {
    return this.liArray[this.actualLevel];
  }
  public setActiveLevel(index: number): void {
    this.liArray.forEach(elemLi => elemLi.classList.remove('active-level'));
    this.liArray[index].classList.add('active-level');
  }
  public gameIsComplete(): boolean {
    const completeLevels = document.querySelectorAll('.complete');
    return (completeLevels.length === this.liArray.length)
  }
  private resetGame(): void {
    console.log('Reset Progress');
    this.actualLevel = 0;
    this.setActiveLevel(this.actualLevel);
    const codeView: HTMLElement = document.querySelector('.codeView');
    this.viewCodeLevel(codeView);
    const figuresView: HTMLElement = document.querySelector('.figures');
    this.viewElements(figuresView);
    const completeLevels = document.querySelectorAll('.complete');
    completeLevels.forEach(level => level.classList.remove('complete'));
  }
  public quantityTasks(): number {
    return this.liArray.length;
  }
}