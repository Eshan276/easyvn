type SceneFunction = () => Promise<void>;

export class VN {
  static async play(scene: SceneFunction) {
    await scene();
  }

  static async jumpTo(scene: SceneFunction) {
    await scene();
  }
}
