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
}

export type Project = {
    id: string;
    title: string;
    description: string;
    website?: string;
    thumbnail?: string;
}