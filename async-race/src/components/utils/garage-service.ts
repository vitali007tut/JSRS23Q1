import { CarType } from './base';

export default class GarageService {
    private readonly URL = 'http://127.0.0.1:3000';

    private readonly GARAGE = '/garage';

    private readonly CARS_ON_PAGE = 7;

    public async getCarsOnPage(page: number) {
        const response = await fetch(`${this.URL}${this.GARAGE}?_page=${page}&_limit=${this.CARS_ON_PAGE}`);
        const cars = await response.json();
        return cars;
    }

    public async getCar(id: number) {
        const response = await fetch(`${this.URL}${this.GARAGE}/${id}`);
        const data = await response.json();
        return data;
    }

    public async getNumberCars() {
        const response = await fetch(`${this.URL}${this.GARAGE}?_limit=${this.CARS_ON_PAGE}`);
        const numberOfCars = response.headers.get('X-Total-Count');
        return numberOfCars;
    }

    public async createCar(body: { name: string; color: string }) {
        const response = await fetch(`${this.URL}${this.GARAGE}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const carCreated = await response.json();
        return carCreated;
    }

    public async removeCar(id: number) {
        await fetch(`${this.URL}${this.GARAGE}/${id}`, {
            method: 'DELETE',
        });
    }

    public async updateCar(param: CarType) {
        await fetch(`${this.URL}${this.GARAGE}/${param.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: param.name,
                color: param.color,
            }),
        });
    }
}
