# Goods

Use this when adding or updating the Goods page.

## Files

- Data: `assets/data/goods.json`
- Final images: `assets/images/goods/`
- Template: `layouts/_default/goods.html`

## Data Rules

- Follow the existing object shape in `assets/data/goods.json`.
- `price` stays a string; `currency` is separate.
- `date` should be `YYYY-MM-DD` when known. Partial dates like `2026-05-xx` are allowed.
- `link` may be empty when there is no reliable product page.
- Source order is grouped by `platform`; within each platform group, keep entries sorted from oldest to newest purchase date.
- Page display order is separate: the template sorts by `date` descending.

## Add Flow

1. Ask for title, English title, price, currency, date, platform, link, image source/preference, and usage experience.
2. Verify any provided product URL. If there is no URL, keep `link` empty and follow existing no-link entries.
3. Collaborate on the Chinese short note, then provide matching `note_en`.
4. Write the data into the matching platform group.
5. Validate JSON.

## Image Flow

1. Put source/candidate images in the project root first, never directly in `assets/images/goods/`.
2. For background removal, default to local `rembg` with `u2net` and alpha matting:

   ```sh
   rembg i -a -ppm input.jpg output.png
   ```

3. After the maintainer confirms the candidate image, crop transparent whitespace, keep a small margin, convert to WebP, and move the final file to `assets/images/goods/`.
4. Remove rejected temporary candidate images. Keep or delete source images according to maintainer preference.

## Verify

```sh
jq empty assets/data/goods.json
make check
```

## Background Removal Dependency

Use `rembg` for background removal. Other required tools (`magick`, `jq`, `hugo`, `make`) are expected to exist on this machine.

`rembg` may not be globally installed. If it is missing, create a temporary venv outside the repo and install it there:

```sh
rm -rf /tmp/nand-rembg-venv
uv venv --python /Users/ghot/.local/bin/python3.10 /tmp/nand-rembg-venv
uv pip install --python /tmp/nand-rembg-venv/bin/python 'rembg[cpu,cli]'
```

Then run:

```sh
/tmp/nand-rembg-venv/bin/rembg i -a -ppm input.jpg output.png
```

The default `u2net` model is downloaded automatically if missing and cached at:

```text
~/.u2net/u2net.onnx
```

It is safe to delete and re-download this model cache. Do not commit the venv or model files.
