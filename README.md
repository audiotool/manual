# Audiotool Documentation

_currently work in progress_

Read the documentation at https://audiotool.github.io/docs/.

This repository contains the source files shown on the documentation website.

## Contributing

**Everyone's welcome to contribute!**

If you feel like a page could be improved / rewritten, please [create a pull request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects) with your changes. If you need inspiration, head over to the [issues](https://github.com/audiotool/docs/issues) and pick any issue that is marked with "Help wanted".

We're open even for bigger changes (such as creating new sections, reorganizing sections, etc)! If your idea takes multiple hours to finish however, perhaps it's better to first create an empty draft pull request where you outline your idea, so we can comment on it before you start working - just to make sure that your time is spent effectively. 

### How to contribute

In general, all manual pages are located in the [manuals](/manuals/) directory. They're written using the reStructured syntax, see [here](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) for a quick overview.

If you create new files, you have to reference them from somewhere; either from the index page (in `index.rst`), or from some page already reference by `index.rst`. 

See instructions below to see your changes locally. Once you're happy, create a pull request, and we'll review your changes & deploy them to production.

### Build locally

#### Setup dependencies

* [install sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html)
* install theme: `python3 -m pip install sphinx_rtd_theme`

#### Build

```
make html
```

Note  that this will only rebuild pages for which the source changed.
This means e.g. the sidebar won't update for old documents if you ad a new document.

To rebuild all pages, first fo `make clean` before doing `make html`.

#### View

```
cd _build/html && python3 -m http.server
```
