import CodeScreen from './codeScreen';
import ElementScreen from './elementScreen';
import GameLevelScreen from './gameLevelScreen';
import InputScreen from './inputScreen';
import GameLevelsStore from './gameLevelsStore';
import { findSelectorWrapper, viewByCharacters, winModalWindow } from './utils';

export default class App {
    private readonly DELAY_FOR_CHANGE_FIGURES: number = 800;
    readonly inputScreen = new InputScreen();
    readonly elementScreen = new ElementScreen();
    readonly codeScreen = new CodeScreen();
    readonly gameLevelScreen = new GameLevelScreen();
    private readonly gameLevelStore = GameLevelsStore.getInstance();
    private container: HTMLElement = findSelectorWrapper('.grid-container');
    public start(): void {
        this.container.appendChild(this.inputScreen.create());
        this.container.appendChild(this.elementScreen.start());
        this.container.appendChild(this.codeScreen.start());
        this.container.appendChild(this.gameLevelScreen.start());

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.checkAnswer(this.inputScreen.getInputValue());
            }
        });
        this.inputScreen.inputBtn.addEventListener('click', () => {
            this.checkAnswer(this.inputScreen.getInputValue());
        });
        this.gameLevelScreen.helpButton.addEventListener('click', () => {
            viewByCharacters(this.gameLevelScreen.getRightAnswer(), this.inputScreen.input);
        });
        this.gameLevelScreen.viewElements(this.elementScreen.figures);
        this.gameLevelScreen.viewDescription(this.elementScreen.description);
    }

    private checkAnswer(data: string): void {
        const rightAnswer = this.gameLevelScreen.levels.GameLevels[this.gameLevelScreen.actualLevel].rightAnswer;
        if (data === rightAnswer) {
            console.log(`Right answer ${data}`);
            document.querySelectorAll('.target').forEach((element) => element.classList.add('leave-element'));
            this.inputScreen.setInputSuccessState();

            this.gameLevelScreen.getActualLevelLiElement().classList.add('complete');
            this.gameLevelScreen.completeLevels = [];
            const completeLevel: string | null = this.gameLevelStore.getCompleteLevelsFromStorage();
            if (completeLevel) {
                this.gameLevelScreen.completeLevels = JSON.parse(completeLevel);
            }

            this.gameLevelScreen.completeLevels.push(this.gameLevelScreen.actualLevel);
            this.gameLevelStore.setCompleteLevelsInStorage(JSON.stringify(this.gameLevelScreen.completeLevels));
            if (this.gameLevelScreen.gameIsComplete()) {
                if (this.container) winModalWindow(this.container);
            } else {
                setTimeout(() => {
                    let newLevel = this.gameLevelScreen.actualLevel + 1;
                    if (newLevel === this.gameLevelScreen.quantityTasks()) newLevel -= 1;
                    this.gameLevelScreen.actualLevel = newLevel;
                    this.gameLevelStore.setLevelInStorage(newLevel.toString());
                    this.gameLevelScreen.viewCodeLevel(this.codeScreen.viewerCode);
                    this.gameLevelScreen.viewElements(this.elementScreen.figures);
                    this.gameLevelScreen.viewDescription(this.elementScreen.description);
                    this.gameLevelScreen.setActiveLevel(this.gameLevelScreen.actualLevel);
                }, this.DELAY_FOR_CHANGE_FIGURES);
            }
        } else {
            console.log(`${data} -- wrong answer`);
            this.inputScreen.setInputErrorState(this.elementScreen.figures);
        }
    }
}
