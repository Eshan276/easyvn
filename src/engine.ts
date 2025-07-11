type SceneFn = () => Promise<void>;
type SceneMeta = { background?: string };

const scenes: Record<string, { fn: SceneFn; metadata?: SceneMeta }> = {};

let currentSceneId: string | null = null;

export function registerScene(name: string, fn: SceneFn, metadata?: SceneMeta) {
  scenes[name] = { fn, metadata };
}

export async function startScene(name: string) {
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
  if (currentSceneId !== thisRunId) return;
}

export function gotoScene(name: string) {
  currentSceneId = name;
  startScene(name);
}

function clearUI() {
  const speaker = document.getElementById("speaker");
  const dialogue = document.getElementById("dialogue");
  const container = document.getElementById("choices");

  if (speaker) speaker.textContent = "";
  if (dialogue) dialogue.textContent = "";
  if (container) container.innerHTML = "";
}

export function setBackground(bg: string) {
  const bgImg = document.getElementById("background") as HTMLImageElement;
  if (bgImg) bgImg.src = `./assets/backgrounds/${bg}`;
}

export function jumpToScene(name: string): never {
  gotoScene(name);
  throw "scene-jump";
}