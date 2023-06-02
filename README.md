# Audiotool Documentation

_currently work in progress_

Read the documentation at https://audiotool.github.io/docs/.

This repository contains the source files shown on the documentation website.

## Contributing

**Everyone's welcome to contribute!** 

If you feel like a page could be improved / rewritten, please [create a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) with your changes. If you need inspiration, head over to the [issues](https://github.com/audiotool/docs/issues) and pick any issue that is marked with "Help wanted".

In general, all manual pages are located in the [manuals](/manuals/) directory. They're written using the reStructured syntax, see [here](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) for a quick overview.

The root of the documentation is [index.rst](/index.rst).

You can modify files there, or add new files. If you add a new directory, reference them from [index.rst](/index.rst) so they become visible at the top level. If you want to add images, put them inside the `_static` directory.

See instructions below to see your changes locally before commiting. 

### Build locally

#### Setup dependencies

* [install sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html)
* install theme: `python3 -m pip install sphinx-press-theme`

#### Build

```
make html
```

Note  that this will only rebuild pages for which the source changed.
This means e.g. the sidebar won't update for all documents if you add a new document.

To rebuild all pages, first fo `make clean` before doing `make html`.

#### View

```
cd _build/html && python3 -m http.server
```
