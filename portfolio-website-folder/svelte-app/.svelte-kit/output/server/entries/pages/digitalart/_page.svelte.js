import { $ as ensure_array_like, S as pop, P as push, W as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr, t as to_class } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let currentCenterIndex = 0;
  let scrollProgress = 0;
  const imagesPaths = [
    `${base}/digitalart/art1.jpg`,
    `${base}/digitalart/art2.jpg`,
    `${base}/digitalart/art3.png`,
    `${base}/digitalart/art4.png`,
    `${base}/digitalart/art5.png`,
    `${base}/digitalart/art6.png`,
    `${base}/digitalart/art7.jpg`,
    `${base}/digitalart/art8.jpg`
  ];
  const each_array = ensure_array_like(imagesPaths);
  $$payload.out += `<div><h2 class="svelte-1jvgzzp">OTHER PROJECTS</h2> <div class="gallery-container svelte-1jvgzzp"><button class="scroll-button left svelte-1jvgzzp">&lt;</button> <section class="artwork-gallery svelte-1jvgzzp"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let image = each_array[index];
    $$payload.out += `<img${attr("src", image)}${attr("alt", `Painting ${stringify(index + 1)}`)}${attr("class", to_class("", "svelte-1jvgzzp", { "center": index === currentCenterIndex }))}>`;
  }
  $$payload.out += `<!--]--></section> <button class="scroll-button right svelte-1jvgzzp">></button></div> <input type="range" min="0" max="100"${attr("value", scrollProgress)} class="scrollbar svelte-1jvgzzp"></div>`;
  pop();
}
export {
  _page as default
};
