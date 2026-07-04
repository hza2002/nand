# Post

Use this when writing, editing, translating, or maintaining blog content.

## Structure

- Posts live in `content/posts/<slug>/` as bundles.
- Bilingual posts use paired files:
  - `index.zh-cn.md`
  - `index.en.md`
- Keep bilingual parity for pages/posts that already have both languages.
- The About page is bilingual.

## Translation

For requests like "翻译 xxx 博文", use `.baoyu-skills/baoyu-translate/` as the working area.

Prepare the workspace:

```sh
.baoyu-skills/baoyu-translate/prepare-workdir.sh <source-file>
```

Translate the symlinked file inside the generated workdir, not the original source file.
