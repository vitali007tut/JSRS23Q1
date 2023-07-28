import GarageView from '../main/garage-view';
import MainView from '../main/main-view';
import WinnersView from '../main/winners-view';
import { createElement } from '../utils/utils';

export default class Header {
    private NameButtons = {
        GARAGE: 'To Garage',
        WINNERS: 'To Winners',
    };

    private classButton = {
        GARAGE: 'garage-button',
        WINNERS: 'winners-button',
    };

    private garageNavigationButton: HTMLElement = createElement({
        tag: 'a',
        classList: [this.classButton.GARAGE],
        textContent: this.NameButtons.GARAGE,
    });

    private winnersNavigationButton: HTMLElement = createElement({
        tag: 'a',
        classList: [this.classButton.WINNERS],
        textContent: this.NameButtons.WINNERS,
    });

    private header: HTMLElement = createElement({ tag: 'header', classList: ['header'] });

    public create(mainComponent: MainView): HTMLElement {
        this.garageNavigationButton.classList.add('active');
        this.header.append(this.garageNavigationButton, this.winnersNavigationButton);
        const garageView = new GarageView().create();
        this.garageNavigationButton.addEventListener('click', () => {
            this.winnersNavigationButton.classList.remove('active');
            this.garageNavigationButton.classList.remove('active');
            this.garageNavigationButton.classList.add('active');
            mainComponent.setContent(garageView);
        });
        mainComponent.setContent(garageView);
        const winnersView = WinnersView.getInstance().create();
        this.winnersNavigationButton.addEventListener('click', () => {
            this.garageNavigationButton.classList.remove('active');
            this.winnersNavigationButton.classList.remove('active');
            this.winnersNavigationButton.classList.add('active');
            mainComponent.setContent(winnersView);
        });

        return this.header;
    }
}
