import { OptionsType, Callback, Endpoints } from '../base/base';

class Loader {
    constructor(private baseLink: string, private options: OptionsType) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp<T>(
        { endpoint, options }: { endpoint: Endpoints; options?: OptionsType },
        callback: Callback<T> = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    private makeUrl(options: OptionsType, endpoint: Endpoints): string {
        const urlOptions: OptionsType = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof OptionsType]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: Endpoints, callback: Callback<T>, options: OptionsType = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
