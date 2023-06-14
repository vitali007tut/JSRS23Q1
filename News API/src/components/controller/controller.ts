import { Callback, Endpoints, NewsType, SourcesType } from '../base/base';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: Callback<SourcesType>): void {
        super.getResp(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<NewsType>): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer && target !== null && newsContainer !== null) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoints.Everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
