import CodeScreen from "./codeScreen";
import ElementScreen from "./elementScreen";
import GameLevelScreen from "./gameLevelScreen";
import HeaderScreen from "./headerScreen";
import InputScreen from "./inputScreen";

export default class App {
  readonly inputScreen = new InputScreen();
  readonly elementScreen = new ElementScreen();
  readonly CodeScreen = new CodeScreen();
  readonly gameLevelScreen = new GameLevelScreen();
  readonly headerScreen = new HeaderScreen();
  private container: HTMLDivElement = document.querySelector('.grid-container');

  public start(): void {
    this.container.appendChild(this.inputScreen.create());
    this.container.appendChild(this.headerScreen.start());
    this.container.appendChild(this.elementScreen.start());

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.checkAnswer(this.inputScreen.submit());
      }
    })
    this.inputScreen.inputBtn.addEventListener('click', () => {
      this.checkAnswer(this.inputScreen.submit());
    })


    this.container.appendChild(this.CodeScreen.start());

    this.container.appendChild(this.gameLevelScreen.start())
  }

  private checkAnswer(data: string): void {
    const rightAnswer = this.gameLevelScreen.GameLevels[this.gameLevelScreen.actualLevel].rightAnswer;
    if (data === rightAnswer) {
      console.log(`Right answer ${data}`)
    } else console.log(`${data} -- wrong answer`);
  }
}