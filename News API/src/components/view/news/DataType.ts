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

export type SourceType = {
    id: string;
    name: string;
};

export type NewsType = {
    status: string;
    articles: DataType[];
    totalResults: number;
};

export type SourcesType = {
    status: string;
    sources: DataType[];
};
