export interface SpriteMap {
    [key: string]: string;
}
export interface CharacterOptions {
    defaultSprite: string;
    sprites: SpriteMap;
}
export declare class Character {
    name: string;
    sprites: SpriteMap;
    currentSprite: string;
    orientation: string;
    constructor(name: string, options: CharacterOptions);
    appear({ orientation }?: {
        orientation?: string;
    }): this;
    talk(text: string): this;
    move(px: number): this;
    changeSprite(spriteKey: string): this;
}
