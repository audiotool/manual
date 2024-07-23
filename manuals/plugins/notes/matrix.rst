Matrix
======
.. image:: /images/matrix/matrix_arpeggiator.png


The Matrix arpeggiator takes chords as inputs and plays them in succession rather than simultaneously. The notes are played in a pre-determined pattern, rhythm, and speed. This can add dynamic, rhythmic, and harmonic complexity to your music, creating textures and patterns that would be difficult to perform manually.

Getting started
---------------

To get started, add a matrix to your project and connect its note output to a synth, such as the Heisenberg. Then add a note track to the matrix and draw a chord melody. The matrix will split the chord into individual notes and play them from lowest to highest in a repeating pattern:


.. image:: /images/matrix/matrix_in_studio.png

Settings
--------

Knobs
....

.. image:: /images/matrix/knobs_top.png

The three knobs at the top control individual note playback.

 * **Velocity** controls the velocity of the outgoing notes, unless the velocity is overwritten by a pattern step.
 * **Rate** controls how fast notes are played back. 1/16 means one note will be played every 1/16th note.  
 * **Repeat** controls how often each note is repeated. For a pattern `0 1 2 1`, setting repeat to 2 will instead play the pattern `0 0 1 1 2 2 1 1`.  
 * **Gate** controls how short the notes should play. This acts as a multiplier for the rate set using the "rate" knob. For example, if the rate is set to 1/16 and the gate is set to 50%, the notes will play for 1/32nd note.


Strategy selection
..................

.. image:: /images/matrix/strategy.png

The strategy selection controls allow you to specify the order in which the notes should be played.


On the left, you can select different patterns used to schedule the notes. For example, if you have the input chord notes `0 1 2`, then selecting "Up" will play the chord with notes `0 1 2 0 1 2`, while selecting "Down" will play the notes in the order `2 1 0 2 1 0`.

On the right, you can select how many octaves the pattern should be spread over.

For example, if you have selected the pattern "Down" over "2 octaves", it will first play `2 1 0` one octave higher, and then `2 1 0` one octave lower, then repeat.


Pattern Configuration
................

.. image:: /images/matrix/pattern_controls.png

This section allows you to control how the pattern below the controls is played back.

 * **Patterns** allows you to select and modify one of 4 different patterns.
 * **Edit Range** A pattern can be up to 64 steps long, but only 16 steps are shown below. These buttons allow you to see different parts of the pattern.
 * **Length, Sync** the small number below "Length" determines how long the pattern should be. After the pattern length is reached, the pattern loops, no matter if other steps are configured. The small "S" button stands for "sync" and determines whether the note order should restart together with the pattern or just play to the end independent of pattern length.
 * **Mute, Clear** Mute will mute the entire pattern. Clear clears the pattern from any settings.

Pattern Steps
.............

.. image:: /images/matrix/pattern_steps.png

The pattern step section allows you to configure each individual step of the pattern.
Each vertical bar corresponds to a single step and allows for the following configuration:
 * **Velocity** if this is set to more than 0, the velocity of the outgoing note will be set to this value. If it is 0, the global velocity value is taken.
 * **Mute** will mute this step and play nothing.
 * **Tie** will "tie" this step to the next one, meaning the next step won't be played, and the current step will play for twice as long (or however many tie steps follow).
 * **Chords** will cause the entire incoming chord to be played for this step.


Global Settings
...............

.. image:: /images/matrix/top_right_buttons.png

.

 * **Hold**: If this button is disabled (default), the matrix will stop playing notes if the chord ends. If it is enabled, the matrix will keep playing the same notes even if all notes end until either:  
  * A new chord is played, in which case the pattern updates to the new notes
  * The note indicated below the button (in the image: "C-1") is played, in which case it stops playing.

  The note that stops the playback can be changed by clicking and dragging on the note after "till".

 * **Bypass** causes the Matrix to simply forward incoming notes, bypassing all scheduling and pattern settings.


