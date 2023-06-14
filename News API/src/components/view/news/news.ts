import { DataType } from '../../base/base';
import './news.css';

class News {
    public draw(data: DataType[]): void {
        const news: DataType[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        if (newsItemTemp != null && newsItemTemp != null) {
            news.forEach((item, idx) => {
                if (item) {
                    const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
                    const newItem: HTMLElement | null = newsClone.querySelector('.news__item');
                    if (newItem) {
                        if (idx % 2) newItem.classList.add('alt');
                    }
                    const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                    if (metaPhoto)
                        metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                    const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                    if (metaAuthor) metaAuthor.textContent = item.author || item.source.name;
                    const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                    if (metaDate) metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    const descTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                    if (descTitle) descTitle.textContent = item.title;
                    const descSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                    if (descSource) descSource.textContent = item.source.name;
                    const descContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
                    if (descContent) descContent.textContent = item.description;
                    const readMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
                    if (readMore) readMore.setAttribute('href', item.url);
                    fragment.append(newsClone);
                }
            });
        }
        const docNews: HTMLElement | null = document.querySelector('.news');
        if (docNews) {
            docNews.innerHTML = '';
            docNews.appendChild(fragment);
        }
    }
}

export default News;
