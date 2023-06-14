import { NewsType, SourcesType } from '../base/base';
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
            docSources.addEventListener('click', (event: Event) =>
                this.controller.getNews(event, (data: NewsType) => this.view.drawNews(data))
            );
            this.controller.getSources((data: SourcesType) => this.view.drawSources(data));
        }
    }
}

export default App;
