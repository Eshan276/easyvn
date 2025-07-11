export type Choice = [string, () => void];

export function showChoice(choices: Choice[]) {
  const container = document.getElementById("choices");
  const speaker = document.getElementById("speaker");
  const dialogue = document.getElementById("dialogue");

  if (!container) return;

  if (speaker) speaker.textContent = "Choice:";
  if (dialogue) dialogue.textContent = "";

  container.innerHTML = "";

  choices.forEach(([text, callback]) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.className = "choice-btn";
    btn.onclick = () => {
      container.innerHTML = "";
      callback();
    };
    container.appendChild(btn);
  });
}
