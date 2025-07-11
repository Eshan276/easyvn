type SceneFn = () => Promise<void>;
type SceneMeta = {
    background?: string;
};
export declare function registerScene(name: string, fn: SceneFn, metadata?: SceneMeta): void;
export declare function startScene(name: string): Promise<void>;
export declare function gotoScene(name: string): void;
export declare function setBackground(bg: string): void;
export declare function jumpToScene(name: string): never;
export {};
