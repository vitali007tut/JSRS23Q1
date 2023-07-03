import { GameLevelType } from "./base";
import { createElement, createImgElement } from "./utils";

export default class GameLevelScreen {
  
  GameLevels: GameLevelType[] = [
    {
      title: 'First A',
      description: 'Select the pawns',
      rightAnswer: 'pawn',
      code: ['<pawn />', '<pawn />'],
      figures: [{ name: 'pawn', size: 'normal'},{ name: 'pawn', size: 'normal'}],
      target: [ 0, 1],
    },
    {
      title: 'Second A',
      rightAnswer: 'king',
      description: 'Select the king',
      code: ['<hat />', '<king />', '<flag />', '<rum />', '<king />'],
      figures: [{ name: 'hat', size: 'normal'},{ name: 'king', size: 'normal'},{ name: 'flag', size: 'normal'},{ name: 'rum', size: 'king'},{ name: 'king', size: 'normal'}],
      target: [1, 4],
    },
    {
      title: 'Third #id',
      rightAnswer: '#fancy',
      description: 'Select the fancy flag',
      code: ['<pawn />', '<flag id="fancy" />', '<flag />', '<queen />', '<rum />'],
      figures: [{ name: 'pawn', size: 'normal'},{ name: 'flag', size: 'normal'},{ name: 'flag', size: 'normal'},{ name: 'queen', size: 'normal'},{ name: 'rum', size: 'normal'}],
      target: [1],
    },
    {
      title: 'Fourth .className',
      rightAnswer: '.navigate',
      description: 'Select the navigate',
      code: ['<compass class = "navigate"/>', '<king />', '<flag />', '<rum />', '<compass class = "navigate"/>'],
      figures: [{ name: 'compass', size: 'normal'},{ name: 'king', size: 'normal'},{ name: 'flag', size: 'normal'},{ name: 'rum', size: 'normal'},{ name: 'compass', size: 'normal'}],
      target: [0, 4],
    },
    {
      title: 'Fifth A.className',
      description: 'Select the small rums',
      rightAnswer: 'rum.small',
      code: ['<flag />', '<rum class = "small" />', '<rum />', '<compass />', '<rum class = "small" />', '<hat />'],
      figures: [{ name: 'flag', size: 'normal'}, { name: 'rum', size: 'small'}, { name: 'rum', size: 'normal'}, { name: 'compass', size: 'normal'}, { name: 'rum', size: 'small'}, { name: 'hat', size: 'normal'}],
      target: [1,4],
    },
    {
      title: 'Sixth A,B',
      description: 'Select all the queens and kings',
      rightAnswer: 'queen,king',
      code: ['<hat />', '<queen />', '<king />', '<queen class = "small" />', '<compass />'],
      figures: [{ name: 'hat', size: 'normal'}, { name: 'queen', size: 'normal'},{ name: 'king', size: 'normal'},{ name: 'queen', size: 'small'},{ name: 'compass', size: 'normal'}],
      target: [1, 2, 3],
    },
    {
      title: 'Seventh *',
      description: 'Select all the things!',
      rightAnswer: '*',
      code: ['<rum />', '<hat />', '<queen />', '<flag class = "small"/>', '<compass />', '<flag />'],
      figures: [{ name: 'rum', size: 'normal'}, { name: 'hat', size: 'normal'},{ name: 'queen', size: 'normal'},{ name: 'flag', size: 'small'},{ name: 'compass', size: 'normal'}, { name: 'flag', size: 'normal'}],
      target: [0, 1, 2, 3, 4, 5],
    },
    {
      title: 'Eight A + B',
      description: `Select every pawn that's next to a flag`,
      rightAnswer: 'flag + pawn',
      code: ['<rum />', '<flag />', '<pawn class = "small"/>', '<flag />', '<pawn />', '<pawn class = "small"/>', '<pawn class = "small"/>'],
      figures: [{ name: 'rum', size: 'normal'}, { name: 'flag', size: 'normal'},{ name: 'pawn', size: 'small'},{ name: 'flag', size: 'normal'},{ name: 'pawn', size: 'normal'}, { name: 'pawn', size: 'small'}, { name: 'pawn', size: 'small'}],
      target: [2, 4],
    },
    {
      title: 'Ninth A ~ B',
      description: 'Select the hats beside the rum',
      rightAnswer: 'rum ~ hat',
      code: ['<compass />', '<rum />', '<hat class = "small" />', '<hat />', '<flag />', '<hat class = "small" />', '<hat />'],
      figures: [{ name: 'compass', size: 'normal'}, { name: 'rum', size: 'normal'},{ name: 'hat', size: 'small'},{ name: 'hat', size: 'normal'},{ name: 'flag', size: 'normal'}, { name: 'hat', size: 'small'}, { name: 'hat', size: 'normal'}],
      target: [2, 3],
    },
    {
      title: 'Tenth :first-of-type',
      description: 'Select first compass',
      rightAnswer: 'compass:first-of-type',
      code: ['<flag />', '<compass />', '<compass class = "small" />', '<compass />', '<compass class = "small" />', '<rum />'],
      figures: [{ name: 'flag', size: 'normal'}, { name: 'compass', size: 'normal'}, { name: 'compass', size: 'small'}, { name: 'compass', size: 'normal'}, { name: 'compass', size: 'small'}, { name: 'rum', size: 'normal'}],
      target: [1],
    },
    {
      title: 'Eleven A B, A B',
      description: 'Select elements on papers',
      rightAnswer: 'paper compass, paper flag',
      code: ['<paper> <compass /> </paper>', '<rum />', '<hat class = "small" />', '<hat />', '<paper> <flag /> </paper>'],
      figures: [{ name: 'compass', size: 'normal', inner: {name: 'hat', size: 'TestSize'}}, { name: 'rum', size: 'normal'},{ name: 'compass', size: 'small'},{ name: 'hat', size: 'normal'},{ name: 'flag', size: 'normal', inner: {name: 'hat', size: 'TestSize'}}],
      target: [0, 4],
    },
  ]

  public actualLevel: number = (localStorage.getItem('level')) ? +localStorage.getItem('level') : 0;
  private liArray: HTMLElement[] = [];
  public helpBtn: HTMLElement;
  public completeLevels: number[] = [];
  
  public start(): HTMLElement {
    const element: HTMLElement = createElement('div', 'side');
    element.appendChild(createElement('h2', 'level-tittle', 'Levels'));

    const listLiElements: HTMLElement = document.createElement('div');
    this.GameLevels.forEach((key, index) => {
      const liItem = createElement('li', 'li-item', `${index + 1}  ${this.GameLevels[index].title}`);
      let completeLevels: number[] = [];
      if (JSON.parse(localStorage.getItem('complete levels'))) {
        completeLevels = JSON.parse(localStorage.getItem('complete levels'));
      }
      if (completeLevels.includes(index)) liItem.classList.add('complete');
      this.liArray.push(liItem);
      if (this.GameLevels[index].rightAnswer === this.getRightAnswer()) {
        liItem.classList.add('active-level');
      }
      listLiElements.appendChild(liItem);

      liItem.addEventListener('click', () => {
        this.setActiveLevel(index);
        const tittleLevel = this.GameLevels[index].title;
        localStorage.setItem('level', index.toString());
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
      codeLineElement.classList.add(index.toString());
      const figureName = this.GameLevels[this.actualLevel].figures[index].name;
      codeLineElement.classList.add(figureName)
      element.appendChild(codeLineElement);

      codeLineElement.addEventListener('mouseover', () => {
        const index = codeLineElement.classList[1];
        const figureHovered = document.querySelector(`.figure.\\3${index}`)
        figureHovered.classList.add('hovered');
        const floatElement = createElement('div', 'floatTip');
        figureHovered.before(floatElement);
        floatElement.innerText = `${this.GameLevels[this.actualLevel].code[+index]}`;
        floatElement.style.display = 'inline';
      })
      
      codeLineElement.addEventListener('mouseout', () => {
        const index = codeLineElement.classList[1];
        const figureHovered = document.querySelector(`.figure.\\3${index}`)
        figureHovered.classList.remove('hovered');
        document.querySelector('.floatTip').remove();
       })

    })
    element.appendChild(endLine);
    return element;
  }

  public viewElements(element: HTMLElement): HTMLElement {
    element.innerHTML = '';
    const arrFigures: {
      name: string;
      size: string;
      inner?: {
        name: string;
        size: string;
      } 
    }[] = this.GameLevels[this.actualLevel].figures;

    arrFigures.forEach((figure, index) => {
      const elementFigure = createImgElement(figure.size, `./asserts/${figure.name}.svg`);
      elementFigure.classList.add(index.toString());
      element.appendChild(elementFigure);
      if (figure.inner) {
        const innerElement = createElement('div', `paper`);
        elementFigure.before(innerElement)
      }
      if (this.getTarget().includes(index)) {
        elementFigure.classList.add('target');
      }
      elementFigure.addEventListener('mouseover', () => {
        elementFigure.classList.add('hovered');
        const floatElement = createElement('div', 'floatTip');
        elementFigure.before(floatElement);
        floatElement.innerText = `${this.GameLevels[this.actualLevel].code[index]}`;
        floatElement.style.display = 'inline';
        document.querySelector(`.line.\\3${index}`).classList.add('hovered');
      })
      elementFigure.addEventListener('mouseout', () => {
        elementFigure.classList.remove('hovered');
        document.querySelector('.floatTip').remove();
        document.querySelector(`.line.\\3${index}`).classList.remove('hovered');
      })
    })
    return element;
  }

  public viewDescription(element: HTMLElement): HTMLElement {
    element.innerHTML = '';
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
  public getTarget(): number[] {
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
    localStorage.setItem('level', '0');
    localStorage.setItem('complete levels', JSON.stringify([]))
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

  // public pageLoadLevelsCompleted(): void {
  //   this.completeLevels.forEach((level) => {
  //     this.liArray[level].classList.add('complete');
  //   })
  //   // this.liArray.forEach((item, index) => console.log(item, index));
  // }
}