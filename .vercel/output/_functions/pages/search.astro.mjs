import { c as createComponent, e as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_t0PYe2u-.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_2GOVUkB-.mjs';
import { $ as $$VimeoLightbox } from '../chunks/VimeoLightbox_B2d0W0gm.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const q = new URL(Astro2.request.url).searchParams.get("q")?.trim() ?? "";
  let results = [];
  const base = "https://cms.tompataki.com/wp-json/wp/v2";
  const types = ["post", "page", "commercials", "special_projects", "featured_films"];
  const typeLabel = {
    post: "Post",
    page: "Page",
    commercials: "Commercial",
    special_projects: "Special Project",
    featured_films: "Feature film / Series"
  };
  function pickFeaturedImage(post) {
    const fm = post?._embedded?.["wp:featuredmedia"]?.[0];
    if (!fm) return "";
    const sizes = fm.media_details?.sizes;
    return sizes?.medium_large?.source_url || sizes?.large?.source_url || sizes?.medium?.source_url || fm.source_url || "";
  }
  function normalize(post, type) {
    const title = typeof post.title === "object" ? post.title.rendered : post.title ?? "";
    const acf = post.acf ?? {};
    const hasVimeo = !!acf.vimeo_url;
    return {
      id: `${type}:${post.id}`,
      path: `/${type}/${post.slug}`,
      type,
      typeLabel: typeLabel[type] ?? type,
      title,
      href: acf.vimeo_url ?? post.link ?? "#",
      hasVimeo,
      subtitle: acf.sub_title ?? "",
      directedBy: acf.directed_by ?? "",
      image: pickFeaturedImage(post),
      raw: post
    };
  }
  async function fetchType(type) {
    const url = new URL(`${base}/${type}`);
    url.searchParams.set("_embed", "1");
    url.searchParams.set("search", q);
    url.searchParams.set("per_page", "20");
    url.searchParams.set("status", "publish");
    const res = await fetch(url.toString(), {
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) {
      const txt = await res.text();
      console.log(`WP ${type} search error:`, res.status, txt);
      return [];
    }
    const data = await res.json();
    if (!Array.isArray(data)) return [];
    return data.map((p) => normalize(p, type));
  }
  if (q.length >= 2) {
    const settled = await Promise.allSettled(types.map(fetchType));
    results = settled.flatMap((r) => r.status === "fulfilled" ? r.value : []).reduce((acc, item) => {
      if (!acc.seen.has(item.id)) {
        acc.seen.add(item.id);
        acc.items.push(item);
      }
      return acc;
    }, { seen: /* @__PURE__ */ new Set(), items: [] }).items.slice(0, 40);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "bodyClass": "search search-results", "description": "Search page", "data-astro-cid-ipsxrsrh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="search-results" data-astro-cid-ipsxrsrh> <div id="search-input-wrapper" data-astro-cid-ipsxrsrh> <form role="search" method="get" id="searchform" action="/search" data-astro-cid-ipsxrsrh> <div data-astro-cid-ipsxrsrh> <label for="q" data-astro-cid-ipsxrsrh>Search anything and hit enter</label> <input type="text"${addAttribute(q, "value")} name="q" id="q" placeholder="Search" data-astro-cid-ipsxrsrh> <input type="submit" id="searchsubmit" value="Search" class="button" data-astro-cid-ipsxrsrh> </div> </form> </div> ${q.length < 2 ? renderTemplate`<p data-astro-cid-ipsxrsrh>Type at least 2 characters.</p>` : results.length === 0 ? renderTemplate`<p data-astro-cid-ipsxrsrh>No results.</p>` : renderTemplate`<div id="search-results-wrapper" class="grid-gap" data-astro-cid-ipsxrsrh> ${results.map((r) => renderTemplate`<div${addAttribute(`search-result grid-item ${r.hasVimeo ? "play" : ""}`, "class")} data-astro-cid-ipsxrsrh> ${renderComponent($$result2, "VimeoLightbox", $$VimeoLightbox, { "url": `${r.hasVimeo ? r.href : r.path}`, "data-astro-cid-ipsxrsrh": true }, { "default": async ($$result3) => renderTemplate` <div class="thumbnail"${addAttribute(r.image ? `background-image: url(${r.image})` : "", "style")}${addAttribute(r.title, "aria-label")} data-astro-cid-ipsxrsrh></div> <div class="details" data-astro-cid-ipsxrsrh> <h2 data-astro-cid-ipsxrsrh>${r.title}</h2> ${r.subtitle && renderTemplate`<p class="subtitle" data-astro-cid-ipsxrsrh>${r.subtitle}</p>`} ${r.directedBy && renderTemplate`<p data-astro-cid-ipsxrsrh>
DIRECTOR <span data-astro-cid-ipsxrsrh>${r.directedBy}</span> </p>`} <div class="type" data-astro-cid-ipsxrsrh>${r.typeLabel}</div> </div> ` })} </div>`)} </div>`} </section> ` })} `;
}, "/Users/benceagocs/Documents/work/tompataki-astro/src/pages/search.astro", void 0);

const $$file = "/Users/benceagocs/Documents/work/tompataki-astro/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
