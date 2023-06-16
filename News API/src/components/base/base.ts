export enum Endpoints {
    Sources = 'sources',
    Everything = 'everything',
}

export type Callback<T = void> = (data: T) => void;

export type DataType = {
    name: string | null;
    id: string;
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
} | null;

export type GetSourcesResponseType = {
    status: string;
    sources: DataType[];
};

export type GetNewsResponseType = {
    status: string;
    articles: DataType[];
    totalResults: number;
};

export type SourceType = {
    id: string;
    name: string;
};

export type OptionsType = {
    apiKey?: string;
    sources?: string;
};

export type NewsTempType = {
    index: number;
    url: string | null;
    author: string;
    publishedAt: string;
    title: string;
    name: string;
    description: string;
    readUrl: string;
};

export type LoadPropsType<T> = {
    method: string;
    endpoint: Endpoints;
    callback?: (data: T) => void;
    options?: OptionsType;
};
