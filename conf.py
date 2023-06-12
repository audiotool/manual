# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'Audiotool'
copyright = '2023, Audiotool Inc'
author = 'Audiotool Inc'

# The full version, including alpha/beta/rc tags
release = '0.1'


# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.autosectionlabel'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', "README.md"]

source_suffix = {
    '.rst': 'restructuredtext',
    '.txt': 'restructuredtext',
}


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.


html_theme = 'sphinx_rtd_theme'

html_theme_options = {
    'analytics_id': 'G-V8ERP3BN49',
    'logo_only': False,
    'display_version': False,

    # where "prev"/"next" buttons are shown; bottom, top or both
    'prev_next_buttons_location': 'bottom',

    # add arrow symbol to links pointing outside docs
    'style_external_links': True,

    # weather to keep "+" symbols on left bar
    'collapse_navigation': False,

}

# Configure "edit on github" at top right
html_context = {
    "display_github": True,
    "github_user": "Audiotool",
    "github_repo": "docs",
    "github_version": "master",
    "conf_py_path": "/",
}


# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['static']

# Custom css files to include
html_css_files = [
    "custom.css"
]

html_show_sphinx = False

logo_url = "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d05ec3744972a3774cc038fe42484954/audiotool.png"