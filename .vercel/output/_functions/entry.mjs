import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BPILl357.mjs';
import { manifest } from './manifest_DDZCzAq1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/commercials.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/feature-films.astro.mjs');
const _page5 = () => import('./pages/search.astro.mjs');
const _page6 = () => import('./pages/showreel.astro.mjs');
const _page7 = () => import('./pages/special_projects/101.astro.mjs');
const _page8 = () => import('./pages/special_projects/hervis.astro.mjs');
const _page9 = () => import('./pages/special_projects/hollywood-lounge.astro.mjs');
const _page10 = () => import('./pages/special_projects/houdini.astro.mjs');
const _page11 = () => import('./pages/special_projects/rolling-stone.astro.mjs');
const _page12 = () => import('./pages/special_projects/spectral.astro.mjs');
const _page13 = () => import('./pages/special_projects/the-vinylino.astro.mjs');
const _page14 = () => import('./pages/special-projects.astro.mjs');
const _page15 = () => import('./pages/terms-conditions.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/commercials.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/feature-films.astro", _page4],
    ["src/pages/search.astro", _page5],
    ["src/pages/showreel.astro", _page6],
    ["src/pages/special_projects/101.astro", _page7],
    ["src/pages/special_projects/hervis.astro", _page8],
    ["src/pages/special_projects/hollywood-lounge.astro", _page9],
    ["src/pages/special_projects/houdini.astro", _page10],
    ["src/pages/special_projects/rolling-stone.astro", _page11],
    ["src/pages/special_projects/spectral.astro", _page12],
    ["src/pages/special_projects/the-vinylino.astro", _page13],
    ["src/pages/special-projects.astro", _page14],
    ["src/pages/terms-conditions.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2df951c8-9496-45be-bb21-cfc61eef36b5",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
