export interface DataItem {
    title: string;
    source: string;
    data: {
        code: string;
        [key: string]: any;
    }[];
}

export interface CantonCode {
    id: string;
    name: string;
    code: string;
}