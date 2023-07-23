import { getNumberWinnersApi } from '../utils/api';
import { createElement, createInputElement } from '../utils/utils';

export default class WinnersView {
    public table: HTMLElement;
    private readonly FIRST_PAGE = 1;
    private readonly WINNERS_ON_PAGE = 10;
    private buttonPrev: HTMLInputElement;
    private buttonNext: HTMLInputElement;
    private winnersQuantity: HTMLElement;
    private activePage: HTMLElement;
    // private quantityPages: number;

    constructor() {
        this.table = createElement('table', ['table']);
        this.buttonPrev = createInputElement(['prev', 'buttonPrev', 'disabled'], 'button', 'Prev');
        this.buttonNext = createInputElement(['next', 'buttonNext', 'disabled'], 'button', 'Next');
        this.winnersQuantity = createElement('div', ['winners-quantity']);
        // this.quantityPages = this.FIRST_PAGE;
        // this.getPagesQuantity();
        this.activePage = createElement('div', ['pages-quantity']);
        this.buttonPrev = createInputElement(['prev', 'buttonPrev', 'disabled'], 'button', 'Prev');
        this.buttonNext = createInputElement(['next', 'buttonNext', 'disabled'], 'button', 'Next');
    }

    public create(): HTMLElement {
        this.createTable();
        this.setWinnersDescription();
        this.table.append(this.createDescription(), this.createTable(), this.createPagesControls());
        const tableInner = `<thead><tr><th>Number</th><th>Car</th><th>Name</th><th>Wins</th><th>Best time (seconds)
        </th></tr></thead>

    <tbody>
      <tr>
        <td>John</td><td>Smith</td><td>10</td>
      </tr>
      <tr>
        <td>Pete</td><td>Brown</td><td>15</td>
      </tr>
      <tr>
        <td>Ann</td><td>Lee</td><td>5</td>
      </tr>
      <tr>
        <td>...</td><td>...</td><td>...</td>
      </tr>
    </tbody>`;
        this.table.insertAdjacentHTML('afterbegin', tableInner);
        return this.table;
    }
    private createDescription(): HTMLElement {
        const container = createElement('div', ['description-winners']);
        container.append(this.winnersQuantity, this.activePage);
        return container;
    }
    private createTable(): HTMLElement {
        const container = createElement('div', ['winners-table']);
        const headInner = `<tr><th>Number</th><th>Car</th><th>Name</th><th>Wins</th><th>Best time (seconds)</th></tr>`;
        const tableHead = createElement('thead', ['thead']);
        tableHead.innerHTML = headInner;
        container.append(tableHead);
        return container;
    }

    private async setWinnersDescription() {
        const quantity = await getNumberWinnersApi();
        this.winnersQuantity.innerHTML = `Winners(${quantity})`;
        this.activePage.innerHTML = `Page ${this.FIRST_PAGE}/${Math.ceil(Number(quantity) / this.WINNERS_ON_PAGE)}`;
        // return data.json();
    }
    private async getPagesQuantity() {
        const winnersQuantity = await getNumberWinnersApi();
        // this.quantityPages = Math.ceil(Number(winnersQuantity) / this.WINNERS_ON_PAGE);
        return Math.ceil(Number(winnersQuantity) / this.WINNERS_ON_PAGE);
    }
    private openPrevPage() {
        console.log('prev in winners');
    }
    private openNextPage() {
        console.log('next in winners');
    }
    private createPagesControls(): HTMLElement {
        const container = createElement('div', ['winners-controls-page']);
        this.buttonPrev.addEventListener('click', () => this.openPrevPage());
        this.buttonNext.addEventListener('click', () => this.openNextPage());
        container.append(this.buttonPrev, this.buttonNext);
        return container;
    }
}
