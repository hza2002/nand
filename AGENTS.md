# AGENTS.md

## Hard Constraints
- Stack is Hugo + Blowfish; theme is Git submodule at `themes/blowfish`.
- Keep theme changes out of `themes/blowfish` unless explicitly requested.
- Keep bilingual parity for pages/posts that already have both languages.
- Do not commit generated artifacts: `public/`, `resources/_gen/`, `sources/`.

## Project Notes
- For site UI/layout/style/script changes, read `docs/site.md`.
- For writing, editing, or translating posts, read `docs/post.md`.
- For Goods page updates, read `docs/goods.md`.

## AGENTS Sync Rule
- If an AI changes or adds personalized/custom behavior in this repo (for example: custom layout, shortcode, CSS/JS behavior, data schema, writing convention), it must explicitly remind the maintainer to sync `AGENTS.md` in the final response.
- If the change affects existing entries in this file, update `AGENTS.md` in the same task instead of deferring.
