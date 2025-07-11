const labelMap = new Map<string, () => Promise<void>>();
let jumpTarget: string | null = null;

/**
 * Define a labeled route (used internally by `goto()`).
 */
export function route(labelId: string, fn: () => Promise<void>) {
  labelMap.set(labelId, fn);
}

/**
 * Jump to a label when the function is called.
 */
export function goto(labelId: string) {
  jumpTarget = labelId;
}

/**
 * Should be called at the end of your scene file to run jump target, if any.
 */
export async function runNextRouteIfAny() {
  if (jumpTarget) {
    const fn = labelMap.get(jumpTarget);
    jumpTarget = null;
    if (fn) await fn();
  }
}
