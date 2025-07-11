const scenes = {};
let currentSceneId = null;
export function registerScene(name, fn, metadata) {
    scenes[name] = { fn, metadata };
}
export async function startScene(name) {
    const scene = scenes[name];
    if (!scene) {
        console.error(`Scene "${name}" not found`);
        return;
    }
    currentSceneId = name;
    if (scene.metadata?.background) {
        setBackground(scene.metadata.background);
    }
    clearUI();
    const thisRunId = name;
    await scene.fn();
    // Prevent continuing if a new scene has started
    if (currentSceneId !== thisRunId)
        return;
}
export function gotoScene(name) {
    currentSceneId = name;
    startScene(name);
}
function clearUI() {
    const speaker = document.getElementById("speaker");
    const dialogue = document.getElementById("dialogue");
    const container = document.getElementById("choices");
    if (speaker)
        speaker.textContent = "";
    if (dialogue)
        dialogue.textContent = "";
    if (container)
        container.innerHTML = "";
}
export function setBackground(bg) {
    const bgImg = document.getElementById("background");
    if (bgImg)
        bgImg.src = `./assets/backgrounds/${bg}`;
}
export function jumpToScene(name) {
    gotoScene(name);
    throw "scene-jump";
}
