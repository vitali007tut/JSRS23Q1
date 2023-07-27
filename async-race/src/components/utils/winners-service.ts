import { SortTableType } from './base';

export default class WinnersService {
    private readonly URL = 'http://127.0.0.1:3000';

    private readonly WINNERS = '/winners';

    private readonly CARS_ON_PAGE = 10;

    public async getNumberWinnersApi() {
        const response = await fetch(`${this.URL}${this.WINNERS}?_limit=${this.CARS_ON_PAGE}`);
        const numberOfWinners = response.headers.get('X-Total-Count');
        return numberOfWinners;
    }

    public async createWinnerApi(body: { id: number; wins: number; time: number }) {
        await fetch(`${this.URL}${this.WINNERS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    }

    public async getWinnerApi(id: number) {
        const response = await fetch(`${this.URL}${this.WINNERS}/${id}`);
        const data = await response.json();
        return data;
    }

    public async updateWinnerApi(param: { id: number; wins: number; time: number }) {
        await fetch(`${this.URL}${this.WINNERS}/${param.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                wins: param.wins,
                time: param.time,
            }),
        });
    }

    public async removeCarFromWinnersApi(id: number) {
        await fetch(`${this.URL}${this.WINNERS}/${id}`, {
            method: 'DELETE',
        });
    }

    public async sortTable({ page, limit, sort, order }: SortTableType) {
        const response = await fetch(
            `${this.URL}${this.WINNERS}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`
        );
        return response.json();
    }
}
