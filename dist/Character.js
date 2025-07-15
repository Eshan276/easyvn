export class Character {
    name;
    sprites;
    currentSprite;
    orientation;
    constructor(name, options) {
        this.name = name;
        this.sprites = options.sprites;
        this.currentSprite = options.defaultSprite;
        this.orientation = "center";
    }
    appear({ orientation = "center" } = {}) {
        this.orientation = orientation;
        const img = document.getElementById("character");
        img.src = `./assets/characters/${this.sprites[this.currentSprite]}`;
        img.style.left =
            orientation === "left" ? "10%" : orientation === "right" ? "70%" : "50%";
        img.style.transform = "translateX(-50%)";
        return this;
    }
    talk(text) {
        const speaker = document.getElementById("speaker");
        const dialogue = document.getElementById("dialogue");
        if (speaker)
            speaker.textContent = this.name;
        if (dialogue)
            dialogue.textContent = text;
        return this;
    }
    move(px) {
        const img = document.getElementById("character");
        img.style.transition = "left 0.5s";
        const currentLeft = parseInt(img.style.left || "50", 10);
        img.style.left = `${currentLeft + px}%`;
        return this;
    }
    changeSprite(spriteKey) {
        const img = document.getElementById("character");
        const sprite = this.sprites[spriteKey];
        if (sprite) {
            img.src = `./assets/characters/${sprite}`;
        }
        return this;
    }
}
