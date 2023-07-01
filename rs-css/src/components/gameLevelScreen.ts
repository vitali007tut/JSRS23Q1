import { GameLevelType } from "./base";
import { createElement, createImgElement } from "./utils";

export default class GameLevelScreen {
  
  GameLevels: GameLevelType[] = [
    {
      title: 'First',
      description: 'Select the pawns',
      rightAnswer: 'pawn',
      code: ['<pawn />', '<pawn />'],
      figures: ['pawn', 'pawn'],
      target: 'pawn',
    },
    {
      title: 'Second',
      rightAnswer: 'king',
      description: 'Select the king',
      code: ['<hat />', '<king />', '<flag />', '<rum />', '<compass />'],
      figures: ['hat', 'king', 'flag', 'rum', 'compass'],
      target: 'king',
    },
    {
      title: 'Third',
      rightAnswer: 'rum',
      description: 'Select the 33333333',
      code: ['<pawn />', '<flag />', '<compass />', '<queen />', '<rum />'],
      figures: ['pawn', 'flag', 'compass', 'queen', 'rum'],
      target: 'rum',
    },
    {
      title: 'Fourth',
      rightAnswer: '.compass',
      description: 'Select the 4444444444',
      code: ['<hat />', '<king />', '<flag />', '<rum />', '<compass />'],
      figures: ['hat', 'king', 'flag', 'rum', 'compass'],
      target: 'compass',
    },
    {
      title: 'Fifth',
      description: 'Select the queens',
      rightAnswer: 'queen',
      code: ['<queen />', '<queen />'],
      figures: ['queen', 'queen'],
      target: 'queen',
    },
    {
      title: 'Sixth',
      description: 'Select the 666666666666',
      rightAnswer: 'queen',
      code: ['<queen />', '<queen />'],
      figures: ['queen', 'queen'],
      target: 'queen',
    },
    {
      title: 'Seventh',
      description: 'Select the 777777777777',
      rightAnswer: 'queen',
      code: ['<queen />', '<queen />'],
      figures: ['queen', 'queen'],
      target: 'queen',
    },
    {
      title: 'Eight',
      description: 'Select the 8888888',
      rightAnswer: 'queen',
      code: ['<queen />', '<queen />'],
      figures: ['queen', 'queen'],
      target: 'queen',
    },
    {
      title: 'Ninth',
      description: 'Select the 9999999',
      rightAnswer: 'queen',
      code: ['<queen />', '<queen />'],
      figures: ['queen', 'queen'],
      target: 'queen',
    },
    {
      title: 'Tenth',
      description: 'Select the 10101010',
      rightAnswer: 'queen',
      code: ['<queen />', '<queen />'],
      figures: ['queen', 'queen'],
      target: 'queen',
    },
  ]

  public actualLevel: number = 0;
  private liArray: HTMLElement[] = [];
  public helpBtn: HTMLElement;
  
  public start(): HTMLElement {
    const element: HTMLElement = createElement('div', 'side');
    element.appendChild(createElement('h2', 'level-tittle', 'Levels'));

    const listLiElements: HTMLElement = document.createElement('div');
    this.GameLevels.forEach((key, index) => {
      const liItem = createElement('li', 'li-item', `${index + 1}  ${this.GameLevels[index].title}`);
      this.liArray.push(liItem);
      if (this.GameLevels[index].rightAnswer === this.getRightAnswer()) {
        liItem.classList.add('active-level');
      }
      listLiElements.appendChild(liItem);

      liItem.addEventListener('click', () => {
        this.setActiveLevel(index);
        const tittleLevel = this.GameLevels[index].title;
        this.GameLevels.forEach((element, index) => {
          if (element.title === tittleLevel) {
            this.actualLevel = index;
            const codeView: HTMLElement = document.querySelector('.codeView');
            this.viewCodeLevel(codeView);
            const figuresView: HTMLElement = document.querySelector('.figures');
            this.viewElements(figuresView);
            const descriptionElement: HTMLElement = document.querySelector('.description');
            this.viewDescription(descriptionElement);
          }
        })
      })
    })
    element.appendChild(listLiElements);
    this.helpBtn = createElement('a', 'bth-help', 'HELP');
    element.appendChild(this.helpBtn);
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
      if (figure === this.getTarget()) {
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

  public viewDescription(element: HTMLElement): HTMLElement {
    element.innerHTML = '';
    // const element = createElement('h2', 'description', `${this.GameLevels[this.actualLevel].description}`);
    // console.log(element);
    element.innerHTML = this.GameLevels[this.actualLevel].description;
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
  public getTarget(): string {
    return this.GameLevels[this.actualLevel].target; 
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