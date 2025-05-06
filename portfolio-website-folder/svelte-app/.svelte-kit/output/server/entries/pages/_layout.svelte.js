import { T as getContext, V as bind_props, W as stringify, X as store_get, Y as unsubscribe_stores, S as pop, P as push, Z as slot } from "../../chunks/index.js";
import { a as attr, t as to_class } from "../../chunks/attributes.js";
import { b as base } from "../../chunks/paths.js";
import "../../chunks/client.js";
import { e as escape_html } from "../../chunks/escaping.js";
function Header($$payload) {
  let themeIcon = `${base}/LightModeSign.png`;
  $$payload.out += `<header class="svelte-1fswqu5">`;
  Navigation($$payload);
  $$payload.out += `<!----> <div class="theme-toggle svelte-1fswqu5"><img${attr("src", themeIcon)} alt="Theme Icon" class="theme-icon svelte-1fswqu5"> <input type="checkbox" id="themeSwitch" class="svelte-1fswqu5"> <label for="themeSwitch" class="svelte-1fswqu5"></label></div></header>`;
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Menu($$payload, $$props) {
  let menuOpen = $$props["menuOpen"];
  let closeMenu = $$props["closeMenu"];
  if (menuOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="menu-overlay svelte-137x39n"><button class="close-btn svelte-137x39n">✕</button> <nav class="overlay-links svelte-137x39n"><a${attr("href", `${stringify(base)}/`)} class="svelte-137x39n"><span>Home</span> <img${attr("src", `${stringify(base)}/website-logo.png`)} alt="Logo" class="menu-logo svelte-137x39n"></a> <a${attr("href", `${stringify(base)}/about`)} class="svelte-137x39n">About</a> <a${attr("href", `${stringify(base)}/works`)} class="svelte-137x39n">Works</a> <div class="sub-links svelte-137x39n"><a${attr("href", `${stringify(base)}/painting`)} class="svelte-137x39n">Painting</a> <a${attr("href", `${stringify(base)}/drawing`)} class="svelte-137x39n">Drawing</a> <a${attr("href", `${stringify(base)}/digitalart`)} class="svelte-137x39n">Digital Art</a> <a${attr("href", `${stringify(base)}/otherprojects`)} class="svelte-137x39n">Other Projects</a></div> <a${attr("href", `${stringify(base)}/contact`)} class="svelte-137x39n">Contact</a></nav></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { menuOpen, closeMenu });
}
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let currentPath, currentPageLabel;
  let menuOpen = false;
  function closeMenu() {
    menuOpen = false;
  }
  currentPath = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  currentPageLabel = (() => {
    switch (currentPath) {
      case "/about":
        return "ABOUT";
      case "/works":
        return "WORKS";
      case "/painting":
        return "WORKS";
      case "/drawing":
        return "WORKS";
      case "/digitalart":
        return "WORKS";
      case "/otherprojects":
        return "WORKS";
      case "/contact":
        return "CONTACT";
      case "/":
        return "";
      default:
        return "";
    }
  })();
  $$payload.out += `<nav class="nav svelte-1o070sr"><ul class="svelte-1o070sr"><li><button class="menu-btn svelte-1o070sr">☰</button></li>  <li class="mobile-center svelte-1o070sr">`;
  if (currentPath === "/") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", `${stringify(base)}/`)} class="nav-item selected svelte-1o070sr"><img${attr("src", `${stringify(base)}/website-logo.png`)} alt="Logo" class="mobile-logo svelte-1o070sr"></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="nav-item selected svelte-1o070sr">${escape_html(currentPageLabel)}</span>`;
  }
  $$payload.out += `<!--]--></li> <li class="logo-container svelte-1o070sr"><a${attr("href", `${stringify(base)}/`)}${attr("class", to_class("nav-item logo " + (currentPath === "/" ? "selected" : ""), "svelte-1o070sr"))}><img${attr("src", `${stringify(base)}/website-logo.png`)} alt="Website Logo" class="svelte-1o070sr"></a></li> <div class="center-links svelte-1o070sr"><li><a${attr("href", `${stringify(base)}/about`)}${attr("class", to_class("nav-item " + (currentPath === "/about" ? "selected" : ""), "svelte-1o070sr"))}>ABOUT</a></li> <li><a${attr("href", `${stringify(base)}/works`)}${attr("class", to_class("nav-item " + (currentPath === "/works" ? "selected" : ""), "svelte-1o070sr"))}>WORKS</a></li> <li><a${attr("href", `${stringify(base)}/contact`)}${attr("class", to_class("nav-item " + (currentPath === "/contact" ? "selected" : ""), "svelte-1o070sr"))}>CONTACT</a></li></div></ul> `;
  Menu($$payload, { menuOpen, closeMenu });
  $$payload.out += `<!----></nav>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-1drwqn7"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
