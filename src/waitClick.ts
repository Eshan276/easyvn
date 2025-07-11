export function waitClick(): Promise<void> {
  return new Promise((resolve) => {
    const textbox = document.getElementById("textbox");
    if (textbox) {
      textbox.onclick = () => {
        textbox.onclick = null;
        resolve();
      };
    } else {
      resolve();
    }
  });
}
