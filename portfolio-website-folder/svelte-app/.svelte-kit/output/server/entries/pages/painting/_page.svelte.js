import { $ as ensure_array_like, S as pop, P as push, W as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr, t as to_class } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let currentCenterIndex = 0;
  let scrollProgress = 0;
  const imagesPaths = [
    `${base}/painting/painting1.jpg`,
    `${base}/painting/painting2.jpg`,
    `${base}/painting/painting3.png`,
    `${base}/painting/painting4.jpg`,
    `${base}/painting/painting5.jpg`,
    `${base}/painting/painting6.JPG`,
    `${base}/painting/painting7.jpg`,
    `${base}/painting/painting8.jpg`,
    `${base}/painting/painting9.jpg`,
    `${base}/painting/painting10.jpg`,
    `${base}/painting/painting11.jpg`,
    `${base}/painting/painting12.jpg`,
    `${base}/painting/painting13.jpg`,
    `${base}/painting/painting14.jpg`,
    `${base}/painting/painting15.jpg`,
    `${base}/painting/painting16.JPG`,
    `${base}/painting/painting17.jpg`
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
