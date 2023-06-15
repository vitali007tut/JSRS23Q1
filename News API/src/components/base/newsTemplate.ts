import { NewsTempType } from './base';

export class NewsTemplate {
    public index;

    public url;

    public author;

    public publishedAt;

    public title;

    public name;

    public description;

    public readUrl;

    constructor(object: NewsTempType) {
        this.index = object.index;
        this.url = object.url;
        this.author = object.author;
        this.publishedAt = object.publishedAt;
        this.title = object.title;
        this.name = object.name;
        this.description = object.description;
        this.readUrl = object.readUrl;
    }

    public getElement(): HTMLElement {
        const htmlElem: HTMLElement = document.createElement('div');
        htmlElem.classList.add('news__item');
        if (this.index % 2) htmlElem.classList.add('alt');
        const newsMeta: HTMLElement = document.createElement('div');
        newsMeta.classList.add('news__meta');
        const metaPhoto: HTMLElement = document.createElement('div');
        metaPhoto.classList.add('news__meta-photo');
        metaPhoto.style.backgroundImage = `url(${this.url || 'img/news_placeholder.jpg'})`;
        newsMeta.appendChild(metaPhoto);
        const metaDetails: HTMLElement = document.createElement('ul');
        metaDetails.classList.add('news__meta-details');
        const metaAuthor: HTMLElement = document.createElement('li');
        metaAuthor.classList.add('news__meta-author');
        metaAuthor.textContent = this.author;
        metaDetails.appendChild(metaAuthor);
        const metaDate: HTMLElement = document.createElement('li');
        metaDate.classList.add('news__meta-date');
        metaDate.textContent = this.publishedAt.slice(0, 10).split('-').reverse().join('-');
        metaDetails.appendChild(metaDate);
        newsMeta.appendChild(metaDetails);
        const newsDescription: HTMLElement = document.createElement('div');
        newsDescription.classList.add('news__description');
        const descriptionTitle = document.createElement('h2');
        descriptionTitle.classList.add('news__description-title');
        descriptionTitle.textContent = this.title;
        const descriptionSource = document.createElement('h3');
        descriptionSource.classList.add('news__description-source');
        descriptionSource.textContent = this.name;
        const descriptionContent = document.createElement('p');
        descriptionContent.classList.add('news__description-content');
        descriptionContent.textContent = this.description;
        const descriptionReadMore = document.createElement('p');
        descriptionReadMore.classList.add('news__read-more');
        descriptionReadMore.setAttribute('href', this.readUrl);
        newsDescription.appendChild(descriptionTitle);
        newsDescription.appendChild(descriptionSource);
        newsDescription.appendChild(descriptionContent);
        newsDescription.appendChild(descriptionReadMore);
        htmlElem.appendChild(newsMeta);
        htmlElem.appendChild(newsDescription);
        return htmlElem;
    }
}
