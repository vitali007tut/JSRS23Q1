import { createElement } from '../../utils/utils';
import CarButtons from './car-buttons';
import ImageItems from './image-items';

export default class CarLine {
    public create(name: string, color: string, id: number): HTMLElement {
        const buttons = new CarButtons();
        const carFirstLine = createElement('div', ['car-first-line']);
        carFirstLine.append(buttons.getSelectButton(id), buttons.getRemoveButton(id));
        carFirstLine.append(createElement('span', ['car-tittle', `tittle-id-${id}`], name));
        const carSecondLine = createElement('div', ['car-second-line']);
        const startPosition = createElement('div', ['start-container']);
        const imageCar = createElement('div', [`car-image`, `image-id-${id}`]);
        imageCar.innerHTML = ImageItems.getCar(color);
        startPosition.append(buttons.getStartButton(id), buttons.getStopButton(), imageCar);
        carSecondLine.append(startPosition);
        const imageFlag = createElement('div', ['flag']);
        imageFlag.innerHTML = ImageItems.getFlag();
        carSecondLine.append(imageFlag);
        const carLine = createElement('div', ['line', id.toString()]);
        carLine.append(carFirstLine, carSecondLine);
        return carLine;
    }
}
