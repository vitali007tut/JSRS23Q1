import CodeScreen from "./codeScreen";
import ElementScreen from "./elementScreen";
import GameLevelScreen from "./gameLevelScreen";
import InputScreen from "./inputScreen";

export default class App {
  readonly InputScreen = new InputScreen();
  readonly ElementScreen = new ElementScreen();
  readonly CodeScreen = new CodeScreen();
  readonly GameLevelScreen = new GameLevelScreen();

  public start(): void {
    console.log('Hello from App class')
  }

  private checkAnswer(data: string) {

  }
}