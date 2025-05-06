import { S as pop, P as push, W as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="background-works svelte-xsknh6"></div> <div><section class="works-container svelte-xsknh6"><h1 class="works-title svelte-xsknh6">WORKS</h1> <div class="category svelte-xsknh6"><span class="vertical-text svelte-xsknh6">PAINTING</span> <a${attr("href", `${stringify(base)}/painting`)}><img${attr("src", `${stringify(base)}/cliffs.jpg`)} alt="Painting" class="work-image svelte-xsknh6"></a></div> <div class="category svelte-xsknh6"><span class="vertical-text svelte-xsknh6">DRAWING</span> <a${attr("href", `${stringify(base)}/drawing`)}><img${attr("src", `${stringify(base)}/cranes.jpg`)} alt="Drawing" class="work-image svelte-xsknh6"></a></div> <div class="category svelte-xsknh6"><span class="vertical-text svelte-xsknh6">DIGITAL ART</span> <a${attr("href", `${stringify(base)}/digitalart`)}><img${attr("src", `${stringify(base)}/woman2d.jpg`)} alt="Digital Art" class="work-image svelte-xsknh6"></a></div> <div class="category svelte-xsknh6"><span class="vertical-text svelte-xsknh6">OTHER PROJECTS</span> <a${attr("href", `${stringify(base)}/otherprojects`)}><img${attr("src", `${stringify(base)}/wood..JPG`)} alt="Other Projects" class="work-image svelte-xsknh6"></a></div></section></div>`;
  pop();
}
export {
  _page as default
};
