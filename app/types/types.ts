export type Feedback = {
    id: string;
    text: string;
    client: {
        name: string;
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