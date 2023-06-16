import { DataType, GetNewsResponseType, GetSourcesResponseType } from '../base/base';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;

    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: GetNewsResponseType): void {
        const values: DataType[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: GetSourcesResponseType): void {
        const values: DataType[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
