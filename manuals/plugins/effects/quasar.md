# Quasar

Quasar is a device to simulate reverberation.

This device is based on a plate algorithm by Jon Dattorro (1997)

###### Credits

  - dsp code・https://www.audiotool.com/user/khoi98
  - 3d knobs modelling・https://www.audiotool.com/user/kepz
  - special project adviser・https://www.audiotool.com/user/jordynth
  - eponym・https://www.audiotool.com/user/kurpingspace2

[Example Tracks](https://www.audiotool.com/album/1gm0xz/)

![ /images/reverb-full.png]( /images/reverb-full.png
" /images/reverb-full.png")

###### Input Section

![ /images/reverb-input.png]( /images/reverb-input.png
" /images/reverb-input.png")

1.  pre-delay time - the time between the start of the initial sound and
    the beginning of the first reflections being audible
2.  low pass filter - reduces the amount of high frequency content of
    the input spectrum
3.  high pass filter - reduces the amount of low frequency content of
    the input spectrum
4.  filter slope - the slope controls the steepness of the filter's
    curve.

###### Output Section

![ /images/reverb-output.png]( /images/reverb-output.png
" /images/reverb-output.png")

1.  dry level - the amount of the dry signal to pass through
2.  wet level - the amount of the wet signal to pass through
3.  bypass - disables any modification of the input signal

###### Plate Section

![ /images/reverb-plate.png]( /images/reverb-plate.png
" /images/reverb-plate.png")

1.  decay - the length of the decay
2.  damping - the amount of damping that is applied on each feedback
    iteration

###### Diffuse Section

![ /images/reverb-diffuse.png]( /images/reverb-diffuse.png
" /images/reverb-diffuse.png")

1.  input - the amount of diffusion for the input circuit (most diffused
    near the center; least diffused on either extremes; resonates when
    near 100%)
2.  tank - the amount of diffusion for the tank circuit (most diffused
    near the center; least diffused on either extremes; resonates when
    near 100%)

###### Vibrato Section

![ /images/reverb-vibrato.png]( /images/reverb-vibrato.png
" /images/reverb-vibrato.png")

1.  amount - the amount of the vibrato
2.  frequency - the frequency of the vibrato
