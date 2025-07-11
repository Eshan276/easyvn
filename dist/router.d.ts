/**
 * Define a labeled route (used internally by `goto()`).
 */
export declare function route(labelId: string, fn: () => Promise<void>): void;
/**
 * Jump to a label when the function is called.
 */
export declare function goto(labelId: string): void;
/**
 * Should be called at the end of your scene file to run jump target, if any.
 */
export declare function runNextRouteIfAny(): Promise<void>;
