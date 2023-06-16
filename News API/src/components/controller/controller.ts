import { Callback, Endpoints, GetNewsResponseType, GetSourcesResponseType } from '../base/base';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: Callback<GetSourcesResponseType>): void {
        super.getResp(
            {
                endpoint: Endpoints.Sources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<GetNewsResponseType>): void {
        let target: HTMLElement | null;
        let newsContainer: HTMLElement;
        if (e.target instanceof HTMLElement && e.currentTarget instanceof HTMLElement) {
            target = e.target;
            newsContainer = e.currentTarget;
            while (target !== newsContainer && target !== null && newsContainer !== null) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');
                    if (sourceId) {
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
                    }
                    return;
                }
                if (target.parentNode instanceof HTMLElement) {
                    target = target.parentNode;
                }
            }
        }
    }
}

export default AppController;
