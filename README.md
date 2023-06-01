# Audiotool Documentation

Website: https://audiotool.github.io/docs/

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