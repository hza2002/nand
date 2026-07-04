# Site

Use this when changing the site UI, layouts, shortcodes, CSS, scripts, or Hugo configuration.

## Rules

- Stack is Hugo + Blowfish.
- Keep theme changes out of `themes/blowfish` unless explicitly requested.
- Prefer local overrides in `layouts/`, `assets/css/`, and `assets/js/`.

## Existing Local Overrides

- Shortcodes: `layouts/shortcodes/compare.html`, `layouts/shortcodes/details.html`
- Head partial: `layouts/partials/head.html`
- Styles: `assets/css/custom.css`, `assets/css/goods.css`, `assets/css/details.css`
- Scripts: `assets/js/goods-filters.js`

## Verify

```sh
make check
make run
```
