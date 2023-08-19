export interface Data {
    title: string;
    source: string;
    data: DataPoint[];
}

export interface DataPoint {
    code: string;
    value: any;
}

export interface CantonCode {
    id: string;
    name: string;
    code: string;
}

export interface ParsedData {
    id: string;
    name: string;
    code: string;
    value: number;
}

export interface ParserOutput {
    data: ParsedData[];
    smallest: number;
    biggest: number;
}