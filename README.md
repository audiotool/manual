# Audiotool Documentation

## Setup

### Setup dependencies

* install sphinx: `sudo apt install python3-sphinx`
* install theme: `python3 -m pip install sphinx-press-theme`
* install markdown parser: `python3 -m pip install myst-parser`

### Build

```
make html
```


### View

```
cd _build/html && python3 -m http.server
```

## Todo:

Until launch:

- [ ] Write introductory texts
- [ ] Decide on weather to use reStructured or Markdown
- [ ] Rename old plugin names (beatbox 8, 9), clean up titles (like `Matrix (draft)`)
- [ ] Add static domain name `docs.audiotool.com`
- [ ] Link from homepage to docs
- [ ] Add page "Contribute"
- [ ] Add "Space" documentation
- [ ] Add Booster page

Then:
- [ ] Fix non-consecutive header issue (if staying with markdown)
- [ ] Work over & clean up texts
- [ ] Add an image to every audio effect
- [ ] Add videos to relevant articles?