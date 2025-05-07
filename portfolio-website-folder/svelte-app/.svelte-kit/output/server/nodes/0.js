import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CX88Jkvt.js","_app/immutable/chunks/Cl4BEs3t.js","_app/immutable/chunks/D5IyU0r3.js","_app/immutable/chunks/Dj_4xL3t.js","_app/immutable/chunks/CVxI4GAm.js","_app/immutable/chunks/BEjkCK7M.js","_app/immutable/chunks/Dz-8e_1Y.js","_app/immutable/chunks/DIbtKUkr.js","_app/immutable/chunks/BQY517lz.js","_app/immutable/chunks/BINRsxwB.js","_app/immutable/chunks/DjLezUdo.js"];
export const stylesheets = ["_app/immutable/assets/0.VzRr0T1B.css"];
export const fonts = [];
