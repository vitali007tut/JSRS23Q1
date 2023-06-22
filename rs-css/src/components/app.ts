import CodeScreen from "./codeScreen";
import ElementScreen from "./elementScreen";
import GameLevelScreen from "./gameLevelScreen";
import InputScreen from "./inputScreen";
import { viewByCharacters } from "./utils";

export default class App {
  readonly inputScreen = new InputScreen();
  readonly elementScreen = new ElementScreen();
  readonly codeScreen = new CodeScreen();
  readonly gameLevelScreen = new GameLevelScreen();
  private container: HTMLDivElement = document.querySelector('.grid-container');

  public start(): void {
    this.container.appendChild(this.inputScreen.create());
    this.container.appendChild(this.elementScreen.start());
    this.container.appendChild(this.codeScreen.start());
    this.container.appendChild(this.gameLevelScreen.start())

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.checkAnswer(this.inputScreen.submit());
      }
    })
    this.inputScreen.inputBtn.addEventListener('click', () => {
      this.checkAnswer(this.inputScreen.submit());
    })
    this.gameLevelScreen.helpBtn.addEventListener('click', () => {
      viewByCharacters(this.gameLevelScreen.getRightAnswer(), this.inputScreen.input)
    })
  }

  private checkAnswer(data: string): void {
    const rightAnswer = this.gameLevelScreen.GameLevels[this.gameLevelScreen.actualLevel].rightAnswer;
    if (data === rightAnswer) {
      console.log(`Right answer ${data}`);
      this.inputScreen.setInputSuccessState();

      this.gameLevelScreen.getActualLevelLiElement().classList.add('complete');
      if (this.gameLevelScreen.gameIsComplete()) { 
        alert('YOU----win!');
      } else {
        let newLevel = this.gameLevelScreen.actualLevel + 1;
        if (newLevel === this.gameLevelScreen.quantityTasks()) newLevel -= 1;
        this.gameLevelScreen.actualLevel = newLevel;
        // this.gameLevelScreen.actualLevel += 1
        this.gameLevelScreen.viewCodeLevel(this.codeScreen.viewerCode);
        this.gameLevelScreen.viewElements(this.elementScreen.figures);
        this.gameLevelScreen.setActiveLevel(this.gameLevelScreen.actualLevel);
      }
    } else {
      console.log(`${data} -- wrong answer`);
      this.inputScreen.setInputErrorState(this.elementScreen.figures);
    }
  }
}