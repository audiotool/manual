.. _contribute:

How to Contribute
=================

This page describes how you can contribute to the manual pages of audiotool yourself.

If you're only want to give feedback without making changes yourself, `please create an issue here <https://github.com/audiotool/docs/issues>`_.


Setup
-----

The website you're seeing here is generated based on a set of text files that are written using
the `reStructured markup syntax <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_. 
These files can be found in `this public repository <https://github.com/audiotool/manual>`_; browse the directory
called "*manuals*" to get an idea of its structure. If you want to understand more about how the webpage is generated,
read the documentation of `Sphinx <https://www.sphinx-doc.org/en/master/usage/quickstart.html>`_.


If you have made or want to make changes, please use the forking/pull request workflow described `here <https://docs.github.com/en/get-started/quickstart/contributing-to-projects>`_.

Build locally
^^^^^^^^^^^^^

The following steps describe how you can build this website locally on your
computer so see what your changes look like.

First, you need to:

* `install sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`_
* install the theme: ``python3 -m pip install sphinx_rtd_theme``

Then, everytime you make a change [#rebuild]_, rebuild with:: 

    make html

You can view your changes by opening the file file ``_build/html/index.html`` in your webbrowser.


Troubleshooting ``make html`` not working
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If for whatever reason the above setup doesn't work, you can also install the sphinx 
package directly in python::

    python3 -m pip install sphinx


And then call the ``make html`` command manually from the project cirectory::


    python3 -m sphinx html _build/html .


Make sure you have install the theme as described above.


.. [#rebuild] Note  that this will only rebuild pages for which the source changed.
    This means e.g. the sidebar won't update for old documents if you ad a new document.

    To rebuild all pages, first fo ``make clean`` before doing ``make html``. If you're using sphinx
    directly, simply delete all contents of ``_build/html``.