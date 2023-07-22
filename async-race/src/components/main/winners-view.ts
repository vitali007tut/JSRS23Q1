import { createElement } from '../utils/utils';

export default class WinnersView {
    public table: HTMLElement;

    constructor() {
        this.table = createElement('table', ['table']);
    }

    public create(): HTMLElement {
        const tableInner = `<thead>
      <tr>
        <th>Number</th><th>Car</th><th>Name</th><th>Wins</th><th>Best time (seconds)</th>
      </tr>
    </thead>
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
}
