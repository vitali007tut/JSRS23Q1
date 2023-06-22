import { GameLevelType } from "./base";
import CodeScreen from "./codeScreen";
import { createElement, createImgElement } from "./utils";

export default class GameLevelScreen {
  
  GameLevels: GameLevelType[] = [
    {
      title: 'Find pawn',
      rightAnswer: '.pawn',
      code: ['<pawn />', '<flag />', '<compass />', '<queen />'],
      figures: ['pawn', 'flag', 'compass', 'queen']
        // { figure: 'pawn', src: '' },
        // { figure: 'flag', src: '' },
        // { figure: 'compass', src: '' },
        // { figure: 'queen', src: '' },
    },
    {
      title: 'Second',
      rightAnswer: '.king',
      code: ['<hat />', '<king />', '<flag />', '<rum />', '<compass />'],
      figures: ['hat', 'king', 'flag', 'rum', 'compass'],
        // { figure: 'hat', src: '' },
        // { figure: 'king', src: '' },
        // { figure: 'flag', src: '' },
        // { figure: 'rum', src: '' },
        // { figure: 'compass', src: '' },
    },
  ]

  public actualLevel: number = 1;
  
  public start(): HTMLElement {
    const element: HTMLElement = createElement('div', 'side');
    element.appendChild(createElement('h2', 'level-tittle', 'Levels'));

    const olList: HTMLElement = document.createElement('ol');
    for (let key in this.GameLevels) {
      const liItem = createElement('li', 'li-item', this.GameLevels[key].title);
      if (this.GameLevels[key].rightAnswer === this.getRightAnswer()) {
        liItem.classList.add('active-level');
      }
      olList.appendChild(liItem);
      liItem.addEventListener('click', () => {
        // document.querySelectorAll('.li-item').forEach(elemLi => elemLi.classList.remove('active-level'));
        // liItem.classList.add('active-level');
        this.setActiveLevel(liItem);
        const tittleLevel = liItem.innerHTML;
        this.GameLevels.forEach((element, index) => {
          if (element.title === tittleLevel) {
            this.actualLevel = index;
            const codeView: HTMLElement = document.querySelector('.codeView');
            codeView.innerHTML = '';
            this.viewCodeLevel(codeView);

            const figuresView: HTMLElement = document.querySelector('.figures');
            figuresView.innerHTML = '';
            this.viewElements(figuresView);
          }
        })
      })
    }
    element.appendChild(olList);
    
    return element;
  }   
  
  public viewCodeLevel(element: HTMLElement): HTMLElement {
    const startLine = createElement('span', 'startLine', '<div class="table">');
    const endLine = createElement('span', 'endLine', '</div>');
    element.appendChild(startLine);
    this.GameLevels[this.actualLevel].code.forEach(codeLines => {
        element.appendChild(createElement('div', 'line', codeLines))
    })
    element.appendChild(endLine);
    return element;
  }

  public viewElements(element: HTMLElement): HTMLElement {
    const arrFigures: string[] = this.GameLevels[this.actualLevel].figures;
    arrFigures.forEach(figure => {
      const elementFigure = createImgElement(figure, `./asserts/${figure}.svg`);
      element.appendChild(elementFigure);
      if (figure === this.getRightAnswer().slice(1)) {
        elementFigure.classList.add('target');
      }
    })
    return element;
  }

  public getLevelsLines(): string[] {
    return this.GameLevels[this.actualLevel].code;
  }

  public getRightAnswer(): string {
    return this.GameLevels[this.actualLevel].rightAnswer;
  }

  public setActiveLevel(item: HTMLElement): void {
    document.querySelectorAll('.li-item').forEach(elemLi => elemLi.classList.remove('active-level'));
    item.classList.add('active-level');
  }
}