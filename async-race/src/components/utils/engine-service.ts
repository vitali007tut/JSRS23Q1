export default class EngineService {
    private readonly URL = 'http://127.0.0.1:3000';
    private readonly ENGINE = '/engine';

    public async startEngine(id: number) {
        const response = await fetch(`${this.URL}${this.ENGINE}?id=${id}&status=started`, {
            method: 'PATCH',
        });

        return response.json();
    }

    public async stopEngine(id: number) {
        const response = await fetch(`${this.URL}${this.ENGINE}?id=${id}&status=stopped`, {
            method: 'PATCH',
        });

        return response.json();
    }

    public async driveEngine(id: number) {
        const response = await fetch(`${this.URL}${this.ENGINE}?id=${id}&status=drive`, {
            method: 'PATCH',
        });

        if (response.status === 500) {
            throw new Error('500 from Service driveEngine()');
        }

        return response;
    }
}
