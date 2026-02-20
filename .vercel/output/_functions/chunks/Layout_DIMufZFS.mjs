import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, r as renderComponent, b as addAttribute, m as maybeRenderHead, e as createAstro, f as renderSlot, g as renderHead } from './astro/server_a-LjaXZn.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
import { $ as $$Image } from './_astro_assets_C5KJorw6.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const searchIcon = createSvgComponent({"meta":{"src":"/_astro/search.PoC6MI5q.svg","width":176,"height":176,"format":"svg"},"attributes":{"id":"Capa_1","x":"0px","y":"0px","viewBox":"-217 308.7 176.3 176.3","style":"enable-background:new -217 308.7 176.3 176.3;","xml:space":"preserve"},"children":"\n<style type=\"text/css\">\n\t.st0{fill:#FFFFFF;}\n</style>\n<path class=\"st0\" d=\"M-193,355c-4.3,16.1-2.1,33,6.2,47.4c11.1,19.3,31.9,31.3,54.2,31.3c8.4,0,16.7-1.7,24.5-5l32.5,56.3l13-7.5\n\tl-32.5-56.3c11.2-8.4,19.2-20.1,22.9-33.8c4.3-16.1,2.1-33-6.2-47.4c-11.1-19.3-31.9-31.3-54.2-31.3c-10.9,0-21.7,2.9-31.2,8.4\n\tC-178.3,325.4-188.7,338.9-193,355z M-132.7,323.7c16.9,0,32.7,9.1,41.2,23.8c6.3,11,8,23.8,4.7,36c-3.3,12.3-11.1,22.5-22.1,28.8\n\tc-7.2,4.2-15.4,6.4-23.7,6.4c-16.9,0-32.7-9.1-41.2-23.8c-6.3-11-8-23.8-4.7-36c3.3-12.3,11.1-22.5,22.1-28.8\n\tC-149.1,325.9-140.9,323.7-132.7,323.7z\" />\n"});

const logoBlack = new Proxy({"src":"/_astro/logo-black.By3NHykA.png","width":990,"height":94,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/benceagocs/Documents/work/tompataki-astro/src/assets/logo-black.png";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- <div class="preloader-wrapper">\n  <div class="preloader">\n    <img src={loadIcon.src} alt="loading...">\n  </div>\n</div> -->', '<section id="header" data-astro-cid-3ef6ksr2> <div id="headline" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ', ' </a> <span data-astro-cid-3ef6ksr2>EN | HU</span> </div> <div id="navbar" data-astro-cid-3ef6ksr2> <div id="navbar-wrapper" data-astro-cid-3ef6ksr2> <div class="menu-main-menu-container" data-astro-cid-3ef6ksr2> <ul id="menu-main-menu" class="menu" data-astro-cid-3ef6ksr2> <li id="menu-item-265" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-265" data-astro-cid-3ef6ksr2><a href="/feature-films" data-astro-cid-3ef6ksr2>Feature films / Series</a></li> <li id="menu-item-64" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-64" data-astro-cid-3ef6ksr2><a href="/commercials" data-astro-cid-3ef6ksr2>Commercials</a></li> <li id="menu-item-63" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-63" data-astro-cid-3ef6ksr2><a href="/special-projects" data-astro-cid-3ef6ksr2>Special projects</a></li> <li id="menu-item-62" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-62" data-astro-cid-3ef6ksr2><a href="/showreel" data-astro-cid-3ef6ksr2>Showreel</a></li> <li id="menu-item-61" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-61" data-astro-cid-3ef6ksr2><a href="/about" data-astro-cid-3ef6ksr2>About</a></li> <li id="menu-item-60" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-60" data-astro-cid-3ef6ksr2><a href="/contact" data-astro-cid-3ef6ksr2>Contact</a></li> </ul> </div> <a href="/search" data-astro-cid-3ef6ksr2><img', ' alt="Search" id="searchButton" width="16" height="16" data-astro-cid-3ef6ksr2></a> </div> </div> </section> <!-- desktopon marad (mobilon CSS-sel elrejtj\xFCk) --> <div id="search-overlay" data-astro-cid-3ef6ksr2> <div id="search-overlay-wrapper" data-astro-cid-3ef6ksr2> <span id="searchClose" data-astro-cid-3ef6ksr2>X</span> <form role="search" method="get" id="searchform" action="/search" data-astro-cid-3ef6ksr2> <div data-astro-cid-3ef6ksr2> <label for="q" data-astro-cid-3ef6ksr2>Search anything and hit enter</label> <input type="text" value="" name="q" id="q" placeholder="Search" data-astro-cid-3ef6ksr2> <input type="submit" id="searchsubmit" value="Search" class="button" data-astro-cid-3ef6ksr2> </div> </form> </div> </div> <!-- MOBIL HEADER: nincs duplik\xE1lt <ul>, csak egy \xFCres kont\xE9ner, amit JS felt\xF6lt --> <section id="mobile-header" data-astro-cid-3ef6ksr2> <div id="logo" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ', ' </a> </div> <div id="menu" data-astro-cid-3ef6ksr2> <button type="button" id="mobileMenuButton" class="mobile-menu-btn" aria-label="Open menu" aria-controls="mobile-navbar" aria-expanded="false" data-astro-cid-3ef6ksr2>\n&#9776;\n</button> </div> <!-- EZ a leny\xEDl\xF3 r\xE9sz: ide kl\xF3nozzuk a desktop men\xFCt --> <div id="mobile-navbar" class="mobile-nav" aria-hidden="true" data-astro-cid-3ef6ksr2> <div class="menu-main-menu-container" id="mobile-menu-container" data-astro-cid-3ef6ksr2></div> </div> </section> <script>\n  const isMobile = () => window.matchMedia("(max-width: 991px)").matches;\n\n  window.addEventListener("DOMContentLoaded", () => {\n    const mobileBtn = document.getElementById("mobileMenuButton");\n    const mobileNav = document.getElementById("mobile-navbar");\n    const mobileContainer = document.getElementById("mobile-menu-container");\n    const desktopMenu = document.getElementById("menu-main-menu");\n\n    if (!mobileBtn || !mobileNav || !mobileContainer || !desktopMenu) return;\n\n    function ensureMobileMenuBuilt() {\n        if (mobileContainer.dataset.built === "true") return;\n\n        const clone = desktopMenu.cloneNode(true);\n\n        // Ne legyen duplik\xE1lt ID a DOM-ban\n        clone.removeAttribute("id");\n        clone.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));\n\n        // KRITIKUS: szedd le a desktop/WP classokat, amik mobilon elrejthetik\n        clone.className = "mobile-menu-list";\n\n        // Biztos, ami biztos: list-style reset\n        clone.setAttribute("role", "list");\n\n        mobileContainer.appendChild(clone);\n        mobileContainer.dataset.built = "true";\n    }\n\n    function setOpen(open) {\n      mobileNav.classList.toggle("is-open", open);\n      mobileBtn.setAttribute("aria-expanded", open ? "true" : "false");\n      mobileNav.setAttribute("aria-hidden", open ? "false" : "true");\n    }\n\n    mobileBtn.addEventListener("click", () => {\n      if (!isMobile()) return;\n      ensureMobileMenuBuilt();\n      setOpen(!mobileNav.classList.contains("is-open"));\n    });\n\n    mobileNav.addEventListener("click", (e) => {\n      const a = e.target.closest("a");\n      if (a) setOpen(false);\n    });\n\n    window.addEventListener("resize", () => {\n      if (!isMobile()) setOpen(false);\n    });\n  });\n<\/script> '])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": logoBlack.src, "alt": "Tom Pataki logo", "width": "192", "height": "18", "sizes": "(max-width: 250px) 180px, 192px", "loading": "lazy", "data-astro-cid-3ef6ksr2": true }), addAttribute(searchIcon.src, "src"), renderComponent($$result, "Image", $$Image, { "src": logoBlack.src, "alt": "Tom Pataki logo", "width": "192", "height": "18", "sizes": "(max-width: 250px) 180px, 192px", "loading": "lazy", "data-astro-cid-3ef6ksr2": true }));
}, "/Users/benceagocs/Documents/work/tompataki-astro/src/components/Header.astro", void 0);

const instagramIcon = createSvgComponent({"meta":{"src":"/_astro/vimeo.BwNVjIuI.svg","width":25,"height":25,"format":"svg"},"attributes":{"id":"Layer_2","x":"0px","y":"0px","viewBox":"-293 384.8 24.5 24.5","style":"enable-background:new -293 384.8 24.5 24.5;","xml:space":"preserve"},"children":"\n<style type=\"text/css\">\n\t.st0{fill:#FFFFFF;}\n</style>\n<path class=\"st0\" d=\"M-274.8,387c1.1,0,2.2,0,3.4,0c2.5,1.8,3.2,3.9,1.8,7.1c-2,4.5-4.9,8.4-8.8,11.4c-3.3,2.6-5.9,1.7-7.3-2.3\n\tc-0.9-2.6-1.5-5.4-2.4-8c-0.5-1.5-1-3.3-3.3-1.8c-0.3,0.2-1.1-0.4-1.6-0.6c0-0.2,0-0.3,0-0.5c1.5-1.2,2.9-2.5,4.4-3.6\n\tc3.2-2.4,5.3-1.5,6.1,2.4c0.2,1.3,0.3,2.5,0.6,3.8c0.4,1.7,1,3.4,1.6,5.1c0.3,0,0.5,0,0.8,0.1c0.8-1.1,1.8-2.1,2.5-3.4\n\tc0.6-1.1,1.1-2.4,0.9-3.5c-0.1-0.6-1.8-0.9-3.4-1.7C-277.9,389.9-276.3,388.5-274.8,387z\" />\n"});

const vimeoIcon = createSvgComponent({"meta":{"src":"/_astro/instagram.Bp2N3-VI.svg","width":51,"height":50,"format":"svg"},"attributes":{"id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 51.4 50.4","style":"enable-background:new 0 0 51.4 50.4;","xml:space":"preserve"},"children":"\n<style type=\"text/css\">\n\t.st0{fill:#FFFFFF;}\n</style>\n<g>\n\t<path class=\"st0\" d=\"M25.6,0.2c4.4,0,8.8-0.1,13.2,0C45.5,0.3,51.2,6,51.3,12.9c0.1,8.2,0.2,16.3,0,24.5\n\t\tc-0.1,7.2-6.2,12.8-13.6,12.9c-8,0.1-16.1,0.1-24.1,0C5.8,50.3,0,44.3,0,36.6c0-7.7,0-15.4,0-23.2C0,6.9,4.7,1.3,11,0.3\n\t\tC13.5,0,16,0.1,18.6,0c2.4,0,4.7,0,7.1,0C25.6,0.1,25.6,0.1,25.6,0.2z M46.7,25.2c0-3.5,0-7,0-10.6c0-6.1-3.9-9.9-10-10\n\t\tc-7.3,0-14.6,0-22,0c-6.1,0-10,3.9-10,10.1c0,7,0,14,0,21c0,6,3.8,10,9.8,10c7.4,0.1,14.9,0.1,22.3,0c6-0.1,9.8-4,9.9-10\n\t\tC46.7,32.2,46.7,28.7,46.7,25.2z\" />\n\t<path class=\"st0\" d=\"M12.7,25.2c0-7.2,5.8-12.9,12.9-13c7.2,0,12.9,5.7,13,12.9c0,7.2-5.8,13-13.1,12.9\n\t\tC18.5,38.1,12.7,32.3,12.7,25.2z M33.9,25.2c0-4.6-3.7-8.2-8.2-8.2c-4.5,0-8.2,3.7-8.2,8.2c0,4.5,3.7,8.2,8.3,8.2\n\t\tC30.3,33.4,33.9,29.8,33.9,25.2z\" />\n\t<path class=\"st0\" d=\"M42.2,11.6c0,1.7-1.2,3-2.9,3c-1.7,0-3-1.3-3-2.9c0-1.6,1.3-3,2.9-3C40.9,8.6,42.2,9.9,42.2,11.6z\" />\n</g>\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="footer"> <span class="copyright">©Tom Pataki All rights reserved.</span> <span class="policy">ALL IMAGES AND VIDEOS ARE COPYRIGHT OF THEIR RESPECTIVE OWNERS.</span> <span class="social"> <ul> <li> <a href="https://vimeo.com/user11416108" target="blank"> ${renderComponent($$result, "Image", $$Image, { "src": vimeoIcon.src, "alt": "Tom Pataki Vimeo", "width": "13", "height": "13", "sizes": "(max-width: 30px) 13px, 13px", "loading": "lazy" })} </a> </li> <li> <a href="https://www.instagram.com/tompataki/" target="blank"> ${renderComponent($$result, "Image", $$Image, { "src": instagramIcon.src, "alt": "Tom Pataki Instagram", "width": "13", "height": "13", "sizes": "(max-width: 30px) 13px, 13px", "loading": "lazy" })} </a> </li> </ul> </span> </section>`;
}, "/Users/benceagocs/Documents/work/tompataki-astro/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://tompataki.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { bodyClass, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/swiper.css"><link rel="sitemap" href="/sitemap-index.xml"><script>\n			function mobileMenu() {\n				var x = document.getElementById("mobile-navbar");\n				if (x.className === "mobile-nav") {\n					x.className += " show";\n				} else {\n					x.className = "mobile-nav";\n				}\n			}\n		<\/script><meta name="generator"', '><meta name="description"', "><title>Tom Pataki</title>", "</head> <body", "> ", ' <section id="main-content"> ', " </section> ", '  <script>\nfunction mobileMenu() {\n	var x = document.getElementById("mobile-navbar");\n	if (x.className === "mobile-nav") {\n		x.className += " show";\n	} else {\n		x.className = "mobile-nav";\n	}\n}\n<\/script></body></html>'])), addAttribute(Astro2.generator, "content"), addAttribute(`Tom Pataki - ${description}`, "content"), renderHead(), addAttribute(bodyClass, "class"), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/benceagocs/Documents/work/tompataki-astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $, createSvgComponent as c };
