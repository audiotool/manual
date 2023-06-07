Audio Live Recording
====================

If you want to play an instrument or sing onto your audiotool track,
this feature is for you. Audio Live Recording relaxes [#timelimit]_ the 30 sec
upload limit and calibrates your audio system to record your instrument
or voice in perfect sync with your track.

Overview
--------

Audiotool is, to nobody's surprise, a browser application and those are
unfortunately inherently bad in handling real time audio. To get this
working we introduce two workarounds: We create a mix-down of your track
to reduce glitches during playback. Then we calibrate your audio system,
meaning we measure the elapsed time between generating and receiving
audio (latency). This round trip time later helps to place your
recording in perfect sync to your track. For this you need to take some
time and patience to setup your equipment.

After the mix-down is created you can advance to the calibration dialog.
Just follow the instructions to the letter. Once the latency has been
measured, it is kept for the entire audiotool session. However,
switching your audio-setup or browser tab can change that value. We
encourage you to calibrate your system before each recording to be sure.

You can adjust the start position of the recording, change the pre-count
settings and the input channel(s). Click Record to start and to stop
recording. You can then preview your recording, discard or upload it
through Probe. Please be aware that there is no echo or noise
cancellation. Wearing headphones is mandatory.

Instructions
------------

Step 1
~~~~~~

Create or use an existing audio-track device. Use either the red record
button in the track header or the corresponding item in the context menu
to start the recording function.

|/images/ar-01.jpg|

Step 2
~~~~~~

Wait for the mix-down to complete.

|/images/ar-02.jpg|

Step 3
~~~~~~

Calibrate your audio system. For best results make sure to adjust the
volume of your microphone and headphones so that the sound peaks into
the green area. Once you get the same time value twice, we assume that
we've measured your system's latency and you can advance.

|/images/ar-03.jpg|

Step 4
~~~~~~

Record your audio. After clicking Stop you can preview your recording,
upload or record again.

|/images/ar-05.jpg|

Step 5
~~~~~~

If you click the Upload button, your recording will be sent to our
sample editor Probe for further processing.

|/images/ar-06.jpg|

Step 6
~~~~~~

Your audio recording is automatically placed in the timeline after
upload. You are done!

.. |/images/ar-01.jpg| image:: /images/ar-01.jpg
.. |/images/ar-02.jpg| image:: /images/ar-02.jpg
.. |/images/ar-03.jpg| image:: /images/ar-03.jpg
.. |/images/ar-05.jpg| image:: /images/ar-05.jpg
.. |/images/ar-06.jpg| image:: /images/ar-06.jpg

.. rubric:: Footnotes
    
.. [#timelimit] Maximum recording time is 10 minutes.