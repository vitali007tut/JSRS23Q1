import { GetNewsResponseType, GetSourcesResponseType } from '../base/base';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;

    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const docSources: HTMLElement | null = document.querySelector('.sources');
        if (docSources) {
            docSources.addEventListener('click', (event: Event) => {
                this.controller.getNews(event, (data: GetNewsResponseType) => this.view.drawNews(data));
                document.querySelector('.sources')?.classList.add('height');
            });
            this.controller.getSources((data: GetSourcesResponseType) => this.view.drawSources(data));
        }
    }
}

export default App;
