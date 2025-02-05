export type Feedback = {
    id: string;
    text: string;
    client: {
        name?: string;
        title?: string;
        company?: string;
        website?: string;
    };
    source: string;
    project: {
        title: string;
        term: {
            from: number;
            to: number;
        }
    };
    order: number;
}

export type Project = {
    id: string;
    title: string;
    description: string;
    order: number;
    website?: string;
    thumbnail?: string;
    slug?: string;
}

export type Service = {
    id: string;
    title: string;
    description: string;
    order: number;
    thumbnail?: string;
    slug?: string;
}
