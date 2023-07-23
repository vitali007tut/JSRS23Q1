import { startEngineApi, stopEngine, switchEngineToDrive } from '../../utils/api';
import { createElement, findSelector, getDistance } from '../../utils/utils';
import CarButtons from './car-buttons';
import ImageItems from './image-items';

export default class CarLine {
    private requestID: number;
    private buttons: CarButtons;
    private startButton: HTMLElement;
    private stopButton: HTMLElement;
    constructor(id: number) {
        this.buttons = new CarButtons();
        this.startButton = this.buttons.getStartButton(id);
        this.stopButton = this.buttons.getStopButton(id);
        this.requestID = 0;
    }
    public create(name: string, color: string, id: number): HTMLElement {
        const carFirstLine = createElement('div', ['car-first-line']);
        carFirstLine.append(this.buttons.getSelectButton(id), this.buttons.getRemoveButton(id));
        carFirstLine.append(createElement('span', ['car-tittle', `tittle-id-${id}`], name));
        const carSecondLine = createElement('div', ['car-second-line']);
        const startPosition = createElement('div', ['start-container']);
        const imageCar = createElement('div', [`car-image`, `image-id-${id}`]);
        imageCar.setAttribute('id', `${id}`);
        imageCar.innerHTML = ImageItems.getCar(color);
        startPosition.append(this.startButton, this.stopButton, imageCar);
        carSecondLine.append(startPosition);
        const imageFlag = createElement('div', ['flag']);
        imageFlag.innerHTML = ImageItems.getFlag();
        carSecondLine.append(imageFlag);
        const carLine = createElement('div', ['line', id.toString()]);
        carLine.append(carFirstLine, carSecondLine);
        this.startButton.addEventListener('click', () => {
            this.carStarted(id);
        });
        this.stopButton.addEventListener('click', () => {
            this.carStopped(id);
        });
        return carLine;
    }
    private async carStarted(id: number) {
        this.startButton.classList.add('disable');
        this.stopButton.classList.remove('disable');
        const dataStarted = await startEngineApi(id);
        const timeForAnimation = dataStarted.distance / dataStarted.velocity;
        const carForAnimation = findSelector(`.image-id-${id}`);
        const distance = getDistance();
        const startTime = new Date().getTime();
        const growInSec: number = (distance * 1000) / timeForAnimation;
        const animation = () => {
            const currentTime = new Date().getTime();
            const step: number = ((currentTime - startTime) / 1000) * growInSec;
            if (step < distance) {
                carForAnimation.style.transform = `translateX(${step}px)`;
                this.requestID = requestAnimationFrame(animation);
            }
            return this.requestID;
        };
        this.requestID = animation();
        try {
            const dataDrive = await switchEngineToDrive(id);
            if (dataDrive.status === 500) {
                cancelAnimationFrame(this.requestID);
            }
        } catch {}
    }
    public async carStopped(id: number) {
        this.startButton.classList.remove('disable');
        this.stopButton.classList.add('disable');
        const carForAnimation = findSelector(`.image-id-${id}`);
        cancelAnimationFrame(this.requestID);
        carForAnimation.style.transform = `translateX(0px)`;
        await stopEngine(id);
    }
}
