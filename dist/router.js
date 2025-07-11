const labelMap = new Map();
let jumpTarget = null;
/**
 * Define a labeled route (used internally by `goto()`).
 */
export function route(labelId, fn) {
    labelMap.set(labelId, fn);
}
/**
 * Jump to a label when the function is called.
 */
export function goto(labelId) {
    jumpTarget = labelId;
}
/**
 * Should be called at the end of your scene file to run jump target, if any.
 */
export async function runNextRouteIfAny() {
    if (jumpTarget) {
        const fn = labelMap.get(jumpTarget);
        jumpTarget = null;
        if (fn)
            await fn();
    }
}
