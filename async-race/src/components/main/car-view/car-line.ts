import { startEngineApi, stopEngine, switchEngineToDrive } from '../../utils/api';
import { createElement, findSelector } from '../../utils/utils';
import CarButtons from './car-buttons';
import ImageItems from './image-items';

export default class CarLine {
    private buttons: CarButtons;
    private startButton: HTMLElement;
    private stopButton: HTMLElement;
    constructor(id: number) {
        this.buttons = new CarButtons();
        this.startButton = this.buttons.getStartButton(id);
        this.stopButton = this.buttons.getStopButton(id);
    }
    public create(name: string, color: string, id: number): HTMLElement {
        const carFirstLine = createElement('div', ['car-first-line']);
        carFirstLine.append(this.buttons.getSelectButton(id), this.buttons.getRemoveButton(id));
        carFirstLine.append(createElement('span', ['car-tittle', `tittle-id-${id}`], name));
        const carSecondLine = createElement('div', ['car-second-line']);
        const startPosition = createElement('div', ['start-container']);
        const imageCar = createElement('div', [`car-image`, `image-id-${id}`]);
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
        console.log('this.carStarted');
        this.startButton.classList.add('disable');
        this.stopButton.classList.remove('disable');
        const documentClientWidth = document.documentElement.clientWidth;
        const carContainerWidth = findSelector(`.start-container`).clientWidth;
        const dataStarted = await startEngineApi(id);
        const timeForAnimation = dataStarted.distance / dataStarted.velocity;
        const carForAnimation = findSelector(`.image-id-${id}`);
        const distance = documentClientWidth - carContainerWidth;
        console.log(
            `Start time ${(timeForAnimation / 1000).toFixed(2)} sec translateX(${
                documentClientWidth - carContainerWidth
            }px);`
        );
        let requestID: number;
        const startTime = new Date().getTime();
        const growInSec: number = (distance * 1000) / timeForAnimation;
        const animation = () => {
            const currentTime = new Date().getTime();
            const step: number = ((currentTime - startTime) / 1000) * growInSec;
            if (step < distance) {
                carForAnimation.style.transform = `translateX(${step}px)`;
                requestID = requestAnimationFrame(animation);
            }
            return requestID;
        };
        requestID = animation();
        try {
            const dataDrive = await switchEngineToDrive(id);
            console.log('status', dataDrive.status);
            if (dataDrive.status === 500) {
                console.log(`Car ${id} should be stop`);
                cancelAnimationFrame(requestID);
            }
        } catch (error) {}
    }
    private async carStopped(id: number) {
        console.log(`car ${id} should return on start`);
        this.startButton.classList.remove('disable');
        this.stopButton.classList.add('disable');
        const carForAnimation = findSelector(`.image-id-${id}`);
        carForAnimation.style.transform = `translateX(0px)`;
        const dataStop = await stopEngine(id);
    }
}
