export type Choice = [string, () => void];
export declare function showChoice(choices: Choice[]): Promise<void>;
