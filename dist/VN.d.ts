type SceneFunction = () => Promise<void>;
export declare class VN {
    static play(scene: SceneFunction): Promise<void>;
    static jumpTo(scene: SceneFunction): Promise<void>;
}
export {};
