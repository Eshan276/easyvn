export interface SpriteMap {
  [key: string]: string;
}

export interface CharacterOptions {
  defaultSprite: string;
  sprites: SpriteMap;
}

export class Character {
  name: string;
  sprites: SpriteMap;
  currentSprite: string;
  orientation: string;

  constructor(name: string, options: CharacterOptions) {
    this.name = name;
    this.sprites = options.sprites;
    this.currentSprite = options.defaultSprite;
    this.orientation = "center";
  }

  appear({ orientation = "center" }: { orientation?: string } = {}) {
    this.orientation = orientation;
    const img = document.getElementById("character") as HTMLImageElement;
    img.src = `./assets/characters/${this.sprites[this.currentSprite]}`;
    img.style.left =
      orientation === "left" ? "10%" : orientation === "right" ? "70%" : "50%";
    img.style.transform = "translateX(-50%)";
    return this;
  }

  talk(text: string) {
    const speaker = document.getElementById("speaker");
    const dialogue = document.getElementById("dialogue");
    if (speaker) speaker.textContent = this.name;
    if (dialogue) dialogue.textContent = text;
    return this;
  }

  move(px: number) {
    const img = document.getElementById("character") as HTMLImageElement;
    img.style.transition = "left 0.5s";
    const currentLeft = parseInt(img.style.left || "50", 10);
    img.style.left = `${currentLeft + px}%`;
    return this;
  }

  changeSprite(spriteKey: string) {
    const img = document.getElementById("character") as HTMLImageElement;
    const sprite = this.sprites[spriteKey];
    if (sprite) {
      img.src = `./assets/characters/${sprite}`;
    }
    return this;
  }
}
