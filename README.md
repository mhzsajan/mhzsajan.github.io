# mhzsajan.github.io

Source for **[mhzsajan.github.io](https://mhzsajan.github.io/)** — Sajan Maharjan's
personal site. Plain HTML, CSS and one small script. No build step, no
dependencies, no framework.

## Layout

```
index.html          the whole page, one document
assets/site.css     all styling
assets/site.js      sticky nav, mobile menu, reveal-on-scroll
assets/profile.jpg  portrait
assets/favicon.svg  mark
LICENSE             MIT
```

## Editing

Edit the file, commit, push. GitHub Pages rebuilds on its own; there is nothing
to run and nothing to configure.

```sh
git clone https://github.com/mhzsajan/mhzsajan.github.io.git
cd mhzsajan.github.io
# ...edit...
git commit -am "what changed"
git push
```

To check your work before pushing, open `index.html` directly in a browser — it
runs from the filesystem, no server needed.

## Deploy

Pages is configured on the **`main`** branch, root path, legacy build. A push to
`main` publishes. Changes are usually live within a minute.

If you edit `site.css` or `site.js`, bump the `?v=` query string on the asset tags
in `index.html` — the CDN caches those hard enough that a redeploy will otherwise
leave visitors on the old copy.

## Not in this repository

This is the **website only**. Two other things look related but are separate repos
with their own Pages deployments:

| | repo | URL |
|---|---|---|
| GitHub profile | [mhzsajan/mhzsajan](https://github.com/mhzsajan) | github.com/mhzsajan |
| Song Timer app | [mhzsajan/songtimer](https://github.com/mhzsajan/songtimer) | mhzsajan.github.io/songtimer/ |
| AbleBridgePlus docs | [mhzsajan/AbleBridgePlus](https://github.com/mhzsajan/AbleBridgePlus) | mhzsajan.github.io/AbleBridgePlus/ |

They share the `mhzsajan.github.io` domain, which is why the sub-site URLs are not
findable in this repository's file tree.

## License

MIT © Sajan Maharjan