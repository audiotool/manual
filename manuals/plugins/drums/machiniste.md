# Machiniste

The Machiniste is a Drum computer that eats samples rather than having
in-built internal sounds like the Beatbox 8 or the Beatbox 9 drum
machines. The Machiniste allows for samples to be dragged from the
sample browser into 9 different possible channels. Once a sample has
been loaded to one of the channels it is then possible to set where you
want the hits to occur by plotting steps onto the sequencing grid. Each
of the 9 channels has its own output so that the signal from each
channel can be routed out of the device separately. The Machiniste
includes a range of parameters which can be used to shape the sound of
each sample individually, these parameters each have their own set of
modulation controls which allow for different parameter setting to be
applied to each step in the sequence.

![/images/machiniste1.png](/images/machiniste1.png
"/images/machiniste1.png")

### Sequencer Controls

The sequencer controls across the top of the device allow for you to
change the specifications of your sequence, how long it is, which
pattern you have selected, how much modulation is applied and the
device's master volume control.

![/images/machiniste3.png](/images/machiniste3.png
"/images/machiniste3.png")

1.  **Pattern banks** There are 4 pattern banks A, B, C and D
2.  **Pattern** Use these buttons to toggle through the pattern bank's
    different patterns. Each pattern bank contains 8 possible patterns
3.  **Clear** Clears the selected pattern
4.  **Pattern +/-** The + and - buttons allow you to change the length
    of your pattern. The Machiniste has a maximum pattern length of 128
    steps. TIP\! Holding shift while selecting these buttons will allow
    you to double or half the number of steps in your sequence, from
    2-4, from 16-32 etc.etc.)
5.  **Range** Use these buttons to toggle through the different segments
    of your pattern (only needed if your pattern is longer than 16
    steps)
6.  **Scale** Use these buttons to select what scale you want to be
    working in (default setting is 4/4)
7.  **Shuffle** Using the shuffle option will shuffle your pattern.
    Audiotool does this by selecting keynotes in your sequence and then
    moving or shuffling all of the notes in-between the keynotes either
    forwards or backwards
8.  **Modulation Depth** The modulation depth functions in the same way
    as each parameters modulation controls, the difference being that
    the modulation depth is global. The modulation depth affects all
    modulation on all channels
9.  **Volume** Master volume control
10. **Output** Master output

### Sequencer

The sequencer is where you can plot where you want each hit to occur.
The sequencer includes the channel list on the left of the device, this
is where samples can be dragged from the sample browser and dropped into
one of the channels in the list. It is important to note that the
Machiniste only works with one-shot samples so it is important to make
sure you are browsing in the one-shot category of the sample browser
before dragging a sample into the channel list. Each step that is added
to the sequence is given a modulation value. The modulation value is a
percentage which refers to how much that step will be affected by the
the Machiniste's step modulation. Upon adding a step it is possible to
drag up or down (before releasing the mouse) to raise or lower that
steps modulation value.

![/images/machiniste4.png](/images/machiniste4.png
"/images/machiniste4.png")

1.  **Channel list** The channel list includes all loaded samples.
    Samples are dragged from the sample browser into empty spaces in the
    channel list. The Machiniste has 9 channels making it possible for 9
    different samples to be loaded at one time. Dropping a sample on top
    of an already loaded sample will replace the already existing
    sample.
2.  **Selected sample** The selected sample is denoted by the edit
    button on the left side of the channel. Both clicking on the samples
    name and by clicking on the channels edit button will set that
    channel as selected.
3.  **Exclusive** Channels grouped as exclusive will not allow hits from
    those channels to occur in the same positions in the sequence, only
    the highest channel in the list that is grouped as exclusive will be
    audible.
4.  **Step(0%)** This step has 0% modulation applied. NOTE: A step that
    has 0% modulation will not be affected by any modulation, regardless
    of any of the parameter's modulation settings.
5.  **Step(100%)** This step has 100% modulation applied.
6.  **Mute** Mute each channel individually. The Mute controls are
    specific to each pattern and can not be automated from the timeline.
7.  **Output** Separate outputs for each channel make it possible to
    send each channel's signal to be sent on its own little processing
    adventure. Using a channel's individual output will mean that it
    will no longer be going through the Machiniste's master output.
8.  **sequencer** Select a sample from the Machiniste's channel list and
    draw steps onto the sequencing grid to plot where you want the hits
    to occur.

### Parameter Controls

The parameter controls are where each sample's signal can be shaped and
edited individually. Although the Machiniste only includes one set of
parameter controls the controls are shared by each channel and will
change when a different channel is selected, it is for this reason that
it is important to select which channel you want to edit before making
any changes to the parameter controls. The parameters include start and
end controls, pitch control, a built-in filter for each channel, panning
and volume controls as well as controls to shape the envelope of each
channel. Each parameter control includes its own corresponding
modulation control that lives just beneath it. Although the below image
only highlights the start and level modulation controls, all of the
parameter's modulation controls work in the same way.

![/images/machiniste5.png](/images/machiniste5.png
"/images/machiniste5.png")

1.  **Start** Sample start position.
2.  **Start mod.** The start's modulation is set to -50% while the start
    parameter is set to 20%, this means that steps that have a
    modulation value of 100% will play the sample with the start at 10%
    (-50% of the range between the start of the parameters range and the
    parameters current setting).
3.  **End** Sample end position. TIP\!: Put the end before the start to
    make the sample play in reverse.
4.  **Pitch** Pitch control (+/- 2 octaves).
5.  **Filter mode** Use this to toggle through the filter's two modes,
    high-pass and low-pass.
6.  **Cutoff** Filter cut-off frequency.
7.  **Resonance** Filter resonance control.
8.  **Env. ratio** The envelope ratio allows control over where in the
    sample the amplitude is highest. The default setting for this
    parameter is 0% meaning that the start of the sample will have the
    highest amplitude.
9.  **Env. slope** The envelope slope makes it possible to specify the
    steepness of the envelope's curve. How fast the signal will come
    down from or go up the amplitude's highest point.
10. **Pan** Panorama control for each channel.
11. **Level** Volume control for each channel.
12. **Level mod** The Level's modulation is at +100% whilst the Level
    parameter is at 0%, this means that steps that have a modulation
    value of 100% will play the sample at full volume (+100% of the
    range between the parameters current setting and the end of the
    parameters range).
