Pulverisateur
=============

The Pulverisateur is a polyphonic synthesiser. It is a very powerful
device and can be used to make a large variety of different sounds, from
light floaty melodies to dark heavy-hitting basslines. The Pulverisateur
includes 3 oscillators, a noise generator, an audio input channel and
amplitude envelope and filter envelope controls as well as a filter and
an LFO unit. Unlike some of the other devices the Pulverisateur does not
include its own sequencer, this means that the Pulverisateur must be
sequenced by either using a Note Track via the timeline or by using
another device like the Tonematrix as a sequencer (for maximum editing
power using a Note Track is advised). The Pulverisateur can be broken
down into easily understood sections:

|/images/pulverisateur1.png|

**(Below)** example of the Tonematrix being used to sequence the
Pulverisateur by utilising the note IN feature

|/images/pulverisateur2.png|

Oscillators
~~~~~~~~~~~

OSC stands for oscillator. These 3 sound sources are where the core
sound of the synth can be defined. The three oscillators have the same
parameters and can each be programmed to produce exactly the same sound.
The only difference being the sync and keyboard track options found on
OSC2 and OSC3.

|/images/pulverisateur3.png|

1. **on/off** - Allows for the separate activation of each oscillator.
2. **panning** - Controls the stereo position of each oscillator.
3. **level** - Control over each oscillators individual volume.
4. **tuning** - The tuning controls found on each oscillator allow for
   fine tuning each oscillator's pitch. TIP! Hold SHIFT and cmd while
   using the controls for ultra fine tuning.
5. **octave** - Individual octave setting for each oscillator.
6. **wave selector** - The shape of each oscillator. You can smoothly
   blend from a sinus waveform to a square or directly select the
   different waveforms (sinus, triangle, saw, square) by clicking on the
   according waveform symbol.
7. **sync** - Syncs OSC2 with OSC1. The wave being generated by OSC2
   will be restarted with the next cycle of OSC1.
8. **keyboard track** - KB track refers to keyboard track. When selected
   the pitch of OSC3 will follow the pitch of the notes on the note
   track. If the KB track button is not selected the pitch of the
   oscillator will stay at a fixed level.

Noise
~~~~~

The Noise unit is an oscillator designed to generate acoustic noise. It
can be used at low levels to add warmth or thickness to the synth or it
could be used as a root source to create a new sound. For example it is
possible to make drum hits or other experimental sounds with the noise
unit.

|/images/pulverisateur4.png|

1. **on/off** - Activates or de-activates the noise unit.
2. **panning** - Controls the stereo position of the noise signal.
3. **level** - Volume
4. **colour** - Changes the characteristics of the signal generated by
   the noise unit.

**NOTE:** If you want to add noise to an existing sound, lowering the
noise level before pressing play is recommended. Watch your ears.

Audio IN
~~~~~~~~

The Audio IN allows you to use the output of another sound source with
the Pulverisateur. This means that any signal that is inputted will be
affected by the Pulverisateur's filter and filter modulation controls.
NOTE: The inputted audio signal will only be heard if the there are notes
in the Pulverisateur's note track or on whatever device is being used to
sequence the pulverisateur.

|/images/pulverisateur5.png|

1. **on/off** - Turns the audio input on or off.
2. **panning** - Controls the stereo position of the inputted audio.
3. **level** - Volume
4. **drive** - The drive allows for slight distortion to be applied to
   the input signal.

Filter
~~~~~~

The Filter alters the harmonic content of the combined sound sources.
The Pulverisateur has two filter modes, a double lowpass filter (This
will cut most of the higher frequencies while passing the low
frequencies) and a lowpass/highpass combination (Depending on the filter
spacing, this filter type smoothly blends from notch to bandpass).

|/images/pulverisateur6.png|

1. **filter mode** - The filter has 2 modes: lowpass/lowpass or
   lowpass/highpass.
2. **frequency** - Cut-off frequency.
3. **resonance** - Control over the filter's resonance.
4. **keyboard track** - Allows control over how much the filter follows
   the pitch of the notes on the Pulverisateur's corresponding Note
   Track.
5. **spacing** - Adjust the difference between the two filter's cut-off
   frequencies. When set to 0 both filters have the same cut-off
   frequency.

Modulators
~~~~~~~~~~

The modulators consist for 3 units, the LFO, the filter envelope and the
amplitude envelope. Once the sound of the synth has been created using
the Pulverisateur's different sound sources the modulation units can be
used to vary or modify the properties of the waveform further.

LFO
~~~

LFO stands for low-frequency oscillator. The LFO is an electronic signal
generator that gives a rhythmic pulse or sweep, this pulse or sweep can
be used to modulate the synths audio signal.

|/images/pulverisateur7.png|

1. **wave selector** Select the shape of the LFO. Like the OSC. waveform
   selector you can click on the waveforms to turn the knob into
   concrete positions or smoothly blend between the different shapes.
2. **rate** - Adjusts the speed of the LFO.
3. **sync** - Syncs the rate of the LFO with the tempo of the song.
4. **trigger** - Restarts the LFO with the start of each note note.
5. **destination** - Which oscillators or sound sources are modulated by
   the LFO. Selecting OSC1, OSC2 and OSC3 activates pitch modulation
   with oscillators 1, 2 and 3. FILTER activates modulation of the
   filter cut-off frequency. PWM means all oscillators will be phase
   modulated.
6. **depth** - Adjustment of the LFO's amplitude. If the depth is set to
   0 the LFO won't have any effect, regardless of the other parameter's
   settings.

Filter and AMP modulators
~~~~~~~~~~~~~~~~~~~~~~~~~

The envelopes give a lot of power in terms of how much they can affect
the sound being generated by the synth. The pulverisateur has two
envelopes:

-  **Filter envelope:** Affects the filter's cut-off frequency.
-  **AMP envelope:** Affects the amplitude of every single note.

It is important to note that the diagram below only labels one of each
of the controls, this is because both the filter envelope and the AMP
envelope work in the same way only one is affecting the filter and the
other the AMP.

|/images/pulverisateur8.png|

1. **Attack** - The speed at which the filter/AMP starts once it has
   been triggered.
2. **Decay** - The speed at which the envelope goes from attack to
   sustain.
3. **Loop** - Will loop the decay phase of the envelope.
4. **Sustain** - How long the envelope stays open.
5. **Release** - How long the envelope stays open after the sound has
   stopped.
6. **Amount (Filter level only)** - Controls how much the envelope
   affects the filter's cut-off frequency.

Master
~~~~~~

The Master includes output volume control and the output itself (just
above the master volume control). The master also includes the
Pulverisateur's master tuning control.

|/images/pulverisateur9.png|

1. **volume** - Master volume, the volume of the output signal.
2. **mono/poly** - When the device is set to mono it means that the
   Pulverisateur will only play one note at a time. When set to
   polyphonic the Pulverisateur will be able to play multiple notes at
   one time, making it possible for chords to be played.
3. **glide** - Allows definition of the speed at which the note glides
   from the pitch of the previous note into the pitch of the next note.
4. **tuning** - Allows fine tuning of all oscillators at once.

.. |/images/pulverisateur1.png| image:: /images/pulverisateur1.png
.. |/images/pulverisateur2.png| image:: /images/pulverisateur2.png
.. |/images/pulverisateur3.png| image:: /images/pulverisateur3.png
.. |/images/pulverisateur4.png| image:: /images/pulverisateur4.png
.. |/images/pulverisateur5.png| image:: /images/pulverisateur5.png
.. |/images/pulverisateur6.png| image:: /images/pulverisateur6.png
.. |/images/pulverisateur7.png| image:: /images/pulverisateur7.png
.. |/images/pulverisateur8.png| image:: /images/pulverisateur8.png
.. |/images/pulverisateur9.png| image:: /images/pulverisateur9.png
