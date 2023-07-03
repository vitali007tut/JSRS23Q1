import CodeScreen from './codeScreen';
import ElementScreen from './elementScreen';
import GameLevelScreen from './gameLevelScreen';
import InputScreen from './inputScreen';
import { viewByCharacters, winModalWindow } from './utils';

export default class App {
    readonly inputScreen = new InputScreen();
    readonly elementScreen = new ElementScreen();
    readonly codeScreen = new CodeScreen();
    readonly gameLevelScreen = new GameLevelScreen();
    private container: HTMLDivElement | null = document.querySelector('.grid-container');

    public start(): void {
        this.container?.appendChild(this.inputScreen.create());
        this.container?.appendChild(this.elementScreen.start());
        this.container?.appendChild(this.codeScreen.start());
        this.container?.appendChild(this.gameLevelScreen.start());

        // this.gameLevelScreen.pageLoadLevelsCompleted();

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.checkAnswer(this.inputScreen.submit());
            }
        });
        this.inputScreen.inputBtn.addEventListener('click', () => {
            this.checkAnswer(this.inputScreen.submit());
        });
        this.gameLevelScreen.helpBtn.addEventListener('click', () => {
            viewByCharacters(this.gameLevelScreen.getRightAnswer(), this.inputScreen.input);
        });
        this.gameLevelScreen.viewElements(this.elementScreen.figures);
        this.gameLevelScreen.viewDescription(this.elementScreen.description);
    }

    private checkAnswer(data: string): void {
        const rightAnswer = this.gameLevelScreen.GameLevels[this.gameLevelScreen.actualLevel].rightAnswer;
        if (data === rightAnswer) {
            console.log(`Right answer ${data}`);
            document.querySelectorAll('.target').forEach((element) => element.classList.add('leave-element'));
            this.inputScreen.setInputSuccessState();

            this.gameLevelScreen.getActualLevelLiElement().classList.add('complete');
            this.gameLevelScreen.completeLevels = [];
            const completeLevel: string | null = localStorage.getItem('complete levels');
            if (completeLevel) {
                this.gameLevelScreen.completeLevels = JSON.parse(completeLevel);
            }

            this.gameLevelScreen.completeLevels.push(this.gameLevelScreen.actualLevel);
            localStorage.setItem('complete levels', JSON.stringify(this.gameLevelScreen.completeLevels));
            if (this.gameLevelScreen.gameIsComplete()) {
                if (this.container) winModalWindow(this.container);
            } else {
                setTimeout(() => {
                    let newLevel = this.gameLevelScreen.actualLevel + 1;
                    if (newLevel === this.gameLevelScreen.quantityTasks()) newLevel -= 1;
                    this.gameLevelScreen.actualLevel = newLevel;
                    localStorage.setItem('level', newLevel.toString());
                    this.gameLevelScreen.viewCodeLevel(this.codeScreen.viewerCode);
                    this.gameLevelScreen.viewElements(this.elementScreen.figures);
                    this.gameLevelScreen.viewDescription(this.elementScreen.description);
                    this.gameLevelScreen.setActiveLevel(this.gameLevelScreen.actualLevel);
                }, 800);
            }
        } else {
            console.log(`${data} -- wrong answer`);
            this.inputScreen.setInputErrorState(this.elementScreen.figures);
        }
    }
}
