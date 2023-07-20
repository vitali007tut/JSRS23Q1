import { CarType } from "../base";

const url = 'http://127.0.0.1:3000'
const path = '/garage'

export async function getCarsApi() {
  const response = await fetch(`${url}${path}`)
  const cars = await response.json();
  return cars;
}
export async function getCarApi(id: number) {
  const response = await fetch(`${url}${path}/${id}`)
  const data = await response.json()
  return data;
}

export async function getNumberCarsApi() {
  const response = await fetch(`${url}${path}?_limit=7`);
  const numberOfCars = response.headers.get('X-Total-Count');
  return numberOfCars;
}

export async function createCarApi(body: {name: string, color: string}) {
  const response = await fetch(`${url}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
  const carCreated = await response.json();
  return carCreated;
}

export async function removeCarApi(id: number) {
  const response = await fetch(`${url}${path}/${id}`, {
    method: 'DELETE',
  })
}

export async function updateCarApi(param : CarType) {
  const response = await fetch(`${url}${path}/${param.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: param.name,
      color: param.color
    })
  })
}