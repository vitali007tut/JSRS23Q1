import { CarType } from './base';

const url = 'http://127.0.0.1:3000';
const path = '/garage';
enum Path {
    GARAGE = '/garage',
    ENGINE = '/engine',
}

export async function getCarsOnPageApi(page: number) {
    const response = await fetch(`${url}${path}?_page=${page}&_limit=7`);
    const cars = await response.json();
    return cars;
}
export async function getCarApi(id: number) {
    const response = await fetch(`${url}${path}/${id}`);
    const data = await response.json();
    return data;
}

export async function getNumberCarsApi() {
    const response = await fetch(`${url}${path}?_limit=7`);
    const numberOfCars = response.headers.get('X-Total-Count');
    return numberOfCars;
}

export async function createCarApi(body: { name: string; color: string }) {
    const response = await fetch(`${url}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const carCreated = await response.json();
    return carCreated;
}

export async function removeCarApi(id: number) {
    const response = await fetch(`${url}${path}/${id}`, {
        method: 'DELETE',
    });
}

export async function updateCarApi(param: CarType) {
    const response = await fetch(`${url}${path}/${param.id}`, {
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

export async function startEngineApi(id: number) {
    const response = await fetch(`${url}${Path.ENGINE}?id=${id}&status=started`, {
        method: 'PATCH',
    });
    return response.json();
}
