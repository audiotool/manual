.. _contribute:

Contribute
==========

**Everyone's welcome to contribute!**

If you feel like a page could be improved / rewritten, please `create a pull request <https://docs.github.com/en/get-started/quickstart/contributing-to-projects>`__
with your changes. If you need inspiration, head over to the `issues <https://github.com/audiotool/docs/issues>`_ 
and pick any issue that is marked with "Help wanted".

We're open even for bigger changes (such as creating new sections, reorganizing sections, etc)! 
If your idea takes multiple hours to finish however, perhaps it's better to first create an empty draft
pull request where you outline your idea, so we can comment on it before you start
working - just to make sure that your time is spent effectively. 

How to contribute
-----------------

In general, all manual pages are located in the `manuals <https://github.com/audiotool/manual/tree/main/manuals>`_ directory.
They're written using the reStructured syntax, see `here <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html>`_ for a quick overview.

If you create new files, you have to reference them from somewhere; either from the index page (in ``index.rst``), or 
from some page already reference by ``index.rst``. 

See instructions below to see your changes locally. Once you're happy, create
a pull request, and we'll review your changes & deploy them to production.

Build locally
-------------

Setup dependencies
^^^^^^^^^^^^^^^^^^

* `install sphinx <https://www.sphinx-doc.org/en/master/usage/installation.html>`_
* install theme: ``python3 -m pip install sphinx_rtd_theme``

Build
^^^^^

In the project directory, simply type::

    make html


Note  that this will only rebuild pages for which the source changed.
This means e.g. the sidebar won't update for old documents if you ad a new document.

To rebuild all pages, first fo ``make clean`` before doing ``make html``.

View
^^^^

Open the file ``_build/html/index.html`` in your favourite webbrowser.


Troubleshoot
------------

Can't install ``python3-sphinx`` / ``make html`` command throws error
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If for whatever reason the above setup doesn't work, you can also install the sphinx 
package directly in python::

    python3 -m pip install sphinx


And then call the ``make html`` command manually from the project cirectory::


    python3 -m sphinx html _build/html .


Make sure you have install the theme as described above.