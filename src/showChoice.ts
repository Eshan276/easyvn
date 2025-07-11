import { runNextRouteIfAny } from "./router";

export type Choice = [string, () => void];

let choiceResolver: (() => void) | null = null;

export function showChoice(choices: Choice[]): Promise<void> {
  return new Promise((resolve) => {
    const container = document.getElementById("choices");
    const speaker = document.getElementById("speaker");
    const dialogue = document.getElementById("dialogue");

    if (!container) return resolve();

    if (speaker) speaker.textContent = "Choice:";
    if (dialogue) dialogue.textContent = "";

    container.innerHTML = "";
    choiceResolver = resolve;

    choices.forEach(([text, callback]) => {
      const btn = document.createElement("button");
      btn.textContent = text;
      btn.className = "choice-btn";
      btn.onclick = async () => {
        container.innerHTML = "";

        const result = callback();
        if (result instanceof Promise) await result;

        await runNextRouteIfAny();

        if (choiceResolver) {
          const done = choiceResolver;
          choiceResolver = null;
          done(); // resume scene flow
        }
      };
      container.appendChild(btn);
    });
  });
}
