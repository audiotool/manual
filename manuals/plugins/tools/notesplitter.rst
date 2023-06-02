Notesplitter
============

The Notesplitter allows you to distribute notes to more than one
synthesiser.

Manual
~~~~~~

Either create a note-track or connect another note-producing device to
the note-splitter. Connect up to three devices with note-inputs to the
note-splitter.

Each output can be muted and modified by the velocity parameter.

-  **default** - velocity is passed unchanged
-  **min** - velocity is passed as zero
-  **max** - velocity is passed as full

Known issues
~~~~~~~~~~~~

While it is technically possible to create connections where you
introduce loops to the event-flow, we highly recommend you do not. The
order of the sequence in the process-graph is **undefined** when loops
are present, meaning you will encounter all sorts of weird effects
(notes not playing or endlessly playing).
