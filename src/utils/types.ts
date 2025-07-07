export type FactType = 'trivia' | 'math' | 'date';
export interface FactData {
    number: string;
    type: FactType;
    fact: string;
}
