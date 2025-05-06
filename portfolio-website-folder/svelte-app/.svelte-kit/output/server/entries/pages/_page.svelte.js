import { S as pop, P as push, W as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="background-container svelte-pemr0y"><div class="background svelte-pemr0y"></div> <div class="gradient-overlay svelte-pemr0y"></div></div> <div class="container svelte-pemr0y"><div class="top-icons svelte-pemr0y"><a href="https://www.instagram.com/crdmnu?igsh=MTRnNXZveWc1enQzag==" class="icon svelte-pemr0y"><img${attr("src", `${stringify(base)}/instaSign.png`)} alt="Instagram" class="svelte-pemr0y"></a> <a href="https://github.com/MiyaDatskiv" class="icon svelte-pemr0y"><img${attr("src", `${stringify(base)}/githubSign.png`)} alt="GitHub" class="svelte-pemr0y"></a></div> <div class="title-container svelte-pemr0y"><h1 class="title svelte-pemr0y">SOLOMIYA</h1> <h1 class="title svelte-pemr0y">DATSKIV</h1> <h3 class="subtitle svelte-pemr0y">creative portfolio</h3></div></div>`;
  pop();
}
export {
  _page as default
};
