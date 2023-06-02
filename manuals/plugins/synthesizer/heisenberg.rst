Heisenberg
==========

Heisenberg is a PM synthesiser which provides an enormous variety of
sounds. Heisenberg offers a real choice regarding how sounds are
created, users can work with Heisenberg as a subtractive synthesiser but
it can also be configured to work as a phase-modulation synthesiser.
There are 4 oscillators or operators which can each be configured to
produce 1 of 49 different waveforms. After the operators comes the
modulation matrix where it is possible to decide (if you want) what
modulates what and what goes where. There are 3 exponential envelopes, 2
LFOs and a pitch envelope, all of which being tempo-sync enabled.

To finalise the sound or to just to add something extra there is a voice
controlled filter-unit with adjustable low/hipass behaviour, resonance
control and ordering options. The filter's cut-off frequency can also be
modulated by all envelopes (apart from the pitch envelope) and LFOs.
Heisenberg also supports Unisono which means up to 4 different voices
can be triggered by one note, with detuning and stereo separation for
each voice.

|/images/hei1.png|

Operators and Mod Matrix
~~~~~~~~~~~~~~~~~~~~~~~~

The operators or oscillators are where the raw sound of the synth is
set. There are 4 operators A, B, C and D, each of these operators can be
set to play 1 of 49 different waveforms. What makes the Heisenberg
special is that each wavetable based operator can be phase-modulated by
each of the other operators, as well as this each operator can also be
used to modulate itself. The modulation matrix also includes an
amplitude modulation section where it is possible to use the envelopes
and LFOs to modulate the amplitude of each operator and/or the filter's
cut-off frequency. Deciding what modulates what is done by plotting
percentages in the modulation matrix, this is done by holding down the
mouse and dragging up or down to add a value to the grid.

|/images/hei_operator2.png|

1.  **waveform(B)** - Selecting the waveform image will navigate to the
    wavetable. The default waveform for all operators is a sine wave.
2.  **semitone/ratio(A)** - This is where the frequency of the incoming
    note can be altered. This operator parameter includes 2 states,
    semitone and ratio. It is possible to toggle between the 2 states by
    selecting the parameter's label (either semitone or ratio depending
    on what is selected). If the semitone is set to a value of 0 the
    frequency of the incoming note will not change. If the semitone
    value is set to 1 the operator will play the note 1 semitone higher
    than the incoming note. If ratio is selected the inputed values will
    multiply or divide the frequency of the incoming note. If the ratio
    is set to 1 then the frequency of the incoming note will not change,
    if the ratio is set to 2 then the operator will play the the
    incoming note 1 octave higher, if the ratio is set to 4 then the
    operator will play the note 2 octaves higher and so on.
3.  **offset(D)** - Each operator includes a frequency offset. This
    function allows for frequencies to be added or subtracted from the
    operators frequency after the semitone/ratio has been set.
4.  **pitchENV on/off(D)** - Each operator includes a button to enable
    the pitch envelope.
5.  **pan(A)** - Panning for each operator.
6.  **level(A)** - Level control for each operator (it is important to
    increase an operator's level if you want to hear it).
7.  **operatorA(A)** - The above example shows that operatorA is
    modulating itself with a value of 3%.
8.  **operatorA(B)** - OperatorA is modulating operatorB with a value of
    89%.
9.  **mainENV(filter)** - The above image shows that the main envelope
    is modulating the filter with a value of -21%.
10. **LFO(B)** - This example shows that LFO1 is modulating the
    amplitude of operatorB with a value of 55%.
11. **velocity(A)** - The velocity column allows for the incomings
    note's velocity to be used to modulate the amplitude of the
    operators and/or modulate the filter's cut-off frequency.

Envelopes
~~~~~~~~~

The Heisenberg includes 4 envelopes, Main, ENV2, ENV3 and a pitch
envelope. The mixed signal of the operators will always be going through
the main envelope. ENV2 and 3 will only affect an operator's signal if
this is first specified via the amplitude modulation matrix. Each
envelope can be used to dynamically modulate different targets at the
same time, such as the level of each oscillator and/or the filter's
cut-off frequency. All envelopes can be also be tempo-synced and allow
for the decay phase to be looped, as well as this the exponential slope
(ADSR) of each state can also be modified.

**Below:** The below image only shows the main envelope as an example
since the main envelope and envelopes 2 and 3 all work in exactly the
same way.

|/images/hei_env3.png|

1. **attack handle** - Allows for the attack phase to be manually
   changed by dragging it around the display (although not labelled
   there are also handles for the each other phase of the ADSR
   envelopes).
2. **attack time** - The horizontal slider under the attack curve allows
   for the attack time to be adjusted.
3. **decay time** - Like the attack the decay also includes a horizontal
   slider which allows for the decay time to be lengthened or shortened.
4. **sustain handle** - Control over the duration of the sustain phase.
5. **release time** - Controls the duration of the envelopes release
   phase.
6. **tempo sync on/off** - Like the attack the decay also includes a
   horizontal slider which allows for the decay time to be lengthened or
   shortened.
7. **decay loop on/off** - Enabling this parameter will make it so that
   once the attack phase has passed the decay phase will be looped until
   the note is released.

Pitch Envelope
~~~~~~~~~~~~~~

The pitch envelope works in a similar way to the other ADSR envelopes
which are included in Heisenberg, the difference being that the pitch
envelope is only affecting the pitch of the signal. In order for the
signal from each operator to find the pitch envelope it must first be
enabled by using the pitch envelope on/off buttons beside each operator.
Like the other envelopes the pitch envelope includes handles so that the
shape of the envelope can be manually dragged around the display.

|/images/hei_pitch_env2.png|

1. **attack handle** - Allows for the pitch envelope's attack phase to
   be altered by manually dragging the handle around the display.
   Although not labelled on the above image there are also handles for
   the decay, sustain and release phases of the envelope.
2. **attack time** - Just like the other envelopes the attack includes a
   slider which can be used to lengthen or shorten the duration of the
   attack phase.
3. **decay time** - Duration of the envelopes decay phase.
4. **release time** - Duration of the release phase.
5. **tempo sync on/off** - Control over whether or not the the pitch
   envelope is tempo synced or not.
6. **mode** - This is the same button as found on the other envelopes
   but in the case of the pitch envelope this controls the envelope's
   mode. The pitch envelope has 3 modes; decay loop on, decay loop off
   and decay loop infinity. If set to decay loop on the envelope will
   complete the attack phase but then the decay phase will be looped
   until the note is released with the sustain and release phases being
   ignored. If the mode is set decay infinity then once the attack phase
   of the envelope is completed the decay phase will be looped forever,
   even if the note is released (forever!). If set to decay loop off the
   envelope will act as normal and will include all phases of the ADSR
   adventure.

LFOs
~~~~

The 2 LFOs include the same wave table as the oscillators with 49
different waveforms to choose from. The rate of each LFO can set to a
very slow oscillation of 0.01Hz (1 cycle every 100 seconds) up to 500Hz
(audible range). Each LFO can be time-synced from 4 bars down to 1/256.
The output from the LFOs can be delayed and can also be faded up to the
maximum level (these timing can also be tempo-synced). Each LFO can be
delayed and allows for the phase to be offset. The LFOs are activated by
using the amplitude modulation matrix to plot what you want the LFO's to
modulate.

**Below:** The below image only references LFO1 since both LFO1 and LFO2
work in exactly the same way.

|/images/hei_lfo1.png|

1. **waveform** - Select this button to specify which waveform the LFO
   will use. Choose 1 of the same 49 waveforms that is available with
   the operators.
2. **phase offset** - This slider allows specification of where in the
   waveform the LFO will start its cycle.
3. **rate** - Allows adjustment of the speed or rate of the LFO.
4. **blend time** - The blend time slider allows specification of how
   much the LFOs carrier wave is blended with dry (unLFOed) signal.
5. **delay time** - Control over how long it will take the LFO to start
   after the note has been played.
6. **time sync on/off** - Control over whether or not the LFO is tempo
   synced or not.
7. **restart on/off** - Control over whether the LFO will restart its
   cycle with each new note that is played.

Filter
~~~~~~

The voice controlled filter is applied to each voice being outputted by
Heisenberg. Heisenberg's filter makes it possible to smoothly glide
between the 2 filter modes (hipass/lowpass). The filter also includes a
keyboard tracking option which includes positive and negative values.
The filter allows the user to choose between 12, 24, 36 and 48 decibels
for each octave.

|/images/hei_filter1.png|

1. **x/y handle** - The x/y handle allows for both the filters cut-off
   frequency and resonance with one handle. The vertical axis represents
   the resonance with full resonance at the top and none at the bottom.
   The horizontal axis represents the filter's cut-off frequency with
   low frequencies on the left side of the display and high frequencies
   on the right).
2. **keyboard tracking** - Allows control over how much the filter
   follows the pitch/frequency of the note being played. If the keyboard
   tracking is set at a positive value then the higher notes will be
   filtered with a higher cut-off frequency and the lower notes will be
   filtered with a lower cut-off frequency.
3. **filter mode** - The filter mode is in the form of a slider, this
   makes it possible to smoothly pass between lowpass and hipass modes.
4. **filter order** - The filter order controls the steepness of the
   filter's curve.

Master
~~~~~~

The master controls are where you can adjust the Heisenberg's global
controls for glide, tuning, velocity and volume. The unisono
functionality is also included in the master controls. If Unisono is
activated it will affect all of the waveforms being produced by the

|/images/hei_master2.png|

1.  **noteIN** - This input allows for the Tonematrix to be used to
    sequence Heisenberg.
2.  **play mode** - The Heisenberg has 3 different methods of playing a
    note, mono, legato and polyphonic. When set to mono Heisenberg will
    only be able to play 1 note at a time. Legato behaves like mono only
    that with each new note that is played the main envelope will not be
    restarted and the release phase of the previous note will still be
    audible after the next note has started. Polyphonic makes it so that
    2 notes can be played at the same time.
3.  **unisono** - Unisono makes it possible to create multiple voices
    from the incoming note.
4.  **detune** - Detunes the voices being created by the unisono
    function.
5.  **spread** - Spreads the stereo of the voices being created by the
    unisono function.
6.  **glide** - This controls how much the frequency of the incoming
    note will glide into the frequency of the next note.
7.  **tune** - Global tuning.
8.  **velocity** - The velocity controls how much Heisenberg cares about
    the velocity of the incoming note. The default setting for this
    parameter is 100% which means that Heisenberg is fully taking into
    account the velocity of the incoming note. If the velocity is set to
    0% then Heisenberg will ignore the note's velocity.
9.  **volume** - Global volume control.
10. **output** - Output! This is how the signal is able to leave the
    device and be heard (plug this cable into the mixer).

.. |/images/hei1.png| image:: /images/hei1.png
.. |/images/hei_operator2.png| image:: /images/hei_operator2.png
   :alt: Heisenberg's Operator & Mod Matrix with labels that explain different features
.. |/images/hei_env3.png| image:: /images/hei_env3.png
.. |/images/hei_pitch_env2.png| image:: /images/hei_pitch_env2.png
.. |/images/hei_lfo1.png| image:: /images/hei_lfo1.png
.. |/images/hei_filter1.png| image:: /images/hei_filter1.png
.. |/images/hei_master2.png| image:: /images/hei_master2.png
