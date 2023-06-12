Glossary
========


Additive synthesis
------------------

A synthesis method that creates sound by adding many sine waves of
different frequencies and time-varying amplitudes together. Sine waves
are grouped in partials, consisting of a fundamental frequency, which
defines the pitch of the sound, and a series of harmonic or inharmonic
overtones, which define its timbre. `Space <#2.Space|outline>`__ is an
additive synthesizer that allows you to define the shape and
distribution of a sound’s partials with a few parameters. Space uses
wave-tables to implement its additive synthesis.

ADSR Envelope
-------------

A signal whose amplitude is ideally suited to introduce one-time
variations in the volume or spectral content of a sound. The ADSR
acronym stands for Attack, Decay, Sustain and Release, the four
parameters that typically describe the contour of the envelope. Space
has two envelopes: an `amplitude
envelope <#2.7.Amplitude envelope section|outline>`__ dedicated to
control volume and a `modulation
envelope <#2.8.Modulation envelope section|outline>`__ dedicated to
control other parameters of the sound like timbre, LFO and pitch.

Amplitude
---------

The difference between the extreme values of a signal, which corresponds
to its perceived loudness, or volume, usually expressed in decibels,
abbreviated dB. The output volume of Space can be set in the `output
section <#2.13.Output section|outline>`__ with the Volume knob.

Comb filter
-----------

A type of filter with a frequency response consisting of regularly
spaced notches, thus resembling a comb. Space’s comb filter can be used
to shape the sound of its wave-tables and approximate vocal sounds.

Detune
------

To move the pitch of a sound generator (oscillator, operator or
wave-table) away from its reference value. The detune can be subtle, by
just a few cents, or obvious, by a third, a fifth or an octave interval.
Two or more sound generators playing in unison are often detuned to
create a richer timbre. Space offers controls in the `tuning
section <#2.10.Tuning section|outline>`__ to detune its two wave-tables
up to an octave above and below their original pitch.

Filter
------

A device or process that partially or completely removes some components
of an audio signal. Space provides a comb filter to shape the frequency
spectrum of its sounds.

Frequency
---------

The rate of vibration or oscillation of the waves that propagate sound
in a medium. Frequency is measured in Hertz, one Hertz corresponding to
one oscillation per second. Humans can hear frequencies ranging from 20
to 20,000 Hz. Frequency strongly determines the perception of pitch. A
complex sound or tone can be composed of many frequencies combined, or
partials.

Frequency response
------------------

The measure of the output frequency spectrum of a system or device, for
example a filter, in response to an input signal. Space includes a comb
filter to shape the sound of its two wave-tables.

Frequency spectrum
------------------

A way to visualize a signal that varies in time. It shows the
amplitudes, measured on the vertical axis, of the signal’s components at
different frequencies, measured on the horizontal axis. Space allows you
to visualize the frequency spectrum of its two wave-tables and how the
spectrum parameters affect them on its
`display <#2.2.Display|outline>`__.

Fundamental frequency
---------------------

The lowest frequency component, or partial, of a periodic waveform. It
usually corresponds to the perceived pitch of the corresponding sound.
The tallest, leftmost partial in the frequency spectrum shown on Space’s
`display <#2.2.Display|outline>`__ represents the fundamental frequency
of a given wave-table.

Glide
-----

Also called portamento, the slide of pitch from one note to another.
Space lets you set the duration of slide between successive notes. It
also responds to slide notes in a note region.

Harmonic
--------

Any member of the harmonic series, which is an ideal set of frequencies
that are positive integer multiples of a common fundamental frequency.
Any partial of a complex tone matching such a member is harmonic. Space
lets you set which harmonics will be used to build a sound with the
Separation and N. Harmonics parameters in the `spectrum/comb
section <#2.4.Spectrum/Comb section|outline>`__.

Inharmonic
----------

Any partial of a complex tone that does not match any member of the
harmonic series. Space lets you create inharmonic partials with the
Metal parameter in the `spectrum/comb
section <#2.4.Spectrum/Comb section|outline>`__, which is useful to
create bell or gong like sounds.

LFO
---

Acronym of Low Frequency Oscillator, which produces a signal typically
below the human hearing range of 20 Hz. This signal is commonly used to
modulate one or more properties of another signal. It is ideally suited
to introduce periodic variations in a sound like vibrato or tremolo.
Space’s `LFO <#2.9.LFO section|outline>`__ can modulate the mix of the A
and B wave-tables, the global pitch, the stereo panorama and the output
volume.

Modulation
----------

The process of varying one or more properties of a signal with another
signal. For example, the amplitude of a signal can modulate the
frequency of another signal. Space has three modulators: two envelopes
and one LFO. They can be used to modulate different parameters of
Space’s sound like timbre, pitch, stereo panorama and volume.

Overtone
--------

Any partial above the lowest partial, or fundamental frequency. A pure
sine wave has no overtones. The amount, shape and distribution of
overtones inside a complex tone define its timbre. Space allows you to
define the number of overtones of its wave-tables with the N. Harmonics
parameter in the `spectrum/comb
section <#2.4.Spectrum/Comb section|outline>`__.

Partial
-------

Any simple periodic wave of which a complex tone is composed, including
its fundamental frequency. Each partial in a complex tone can have its
own frequency, amplitude and phase. Space lets you visualize the
partials of its two wave-tables on its
`display <#2.2.Display|outline>`__.

Phase
-----

Initial point of a waveform at its origin as a fraction of one complete
wave cycle. Space lets you set the initial point at which the
`LFO <#2.9.LFO section|outline>`__ starts playing its waveforms with the
Phase knob.

Routing
-------

The process of selecting the path of a signal in a synthesizer for
modulation purposes. The origin of the signal is called modulation
source. Space provides two envelopes and an LFO as modulation sources.
The destination of the signal can be any parameter of the produced
sound. Space lets you route its modulation signals to timbre, pitch,
stereo panorama and volume. Additionally, one envelope can also be
routed to modulate the LFO.

Synthesizer
-----------

An electronic musical instrument that generates audio signals converted
to sound through amplification. There are many types of synthesizers,
depending of the method they use to generate sound, including additive,
subtractive, modular, frequency modulation, phase distortion, sample
based, wave-table, physical modeling and others. Synthesizers
implemented as a computer program are called software synthesizers.
`Space <#2.Space|outline>`__ is an additive wave-table software
synthesizer.

Unison
------

Two sound generators (separate instruments or separate oscillators,
operators or wave-tables inside an instrument) playing the same, nearly
the same pitch, or an octave interval simultaneously. Space’s two
wave-tables can be played in unison to create a compound sound with a
rich timbre.

Wave-table
----------

A series of single-cycle waveforms arranged in a table. Waveforms inside
a wave-table are normally played periodically. The selected waveform for
playback can be modulated in a number of ways, for example by the pitch
of the played note. Adjacent waveforms in the wave-table can be
interpolated digitally. Space offers two wave-tables than can be mixed
in a number of ways to create a complex tone.