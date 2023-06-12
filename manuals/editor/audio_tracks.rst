Audio Tracks
============

Audio tracks are one of the track types in audiotool that can play back audio.
They are always connected to the *Audio Track* decice.

.. image:: /images/audio_track_overview.png


Adding an audio track
---------------------

To add a track, you can drag the "Audio Track" device from the device list
onto the desktop. This will create a new audio track on the timeline
on which we can place audio samples.

.. image:: /images/audio_track_device_in_device_list.png

To add an audio sample onto the timeline, open the sample browser and 
drag the desired sample onto the timeline. You can also simply drag a sample
from there onto the desktop, and an Audio Track device will be created 
automatically.


The sample browser
------------------

*todo*

Uploading your own sample
-------------------------

*todo*

Recording a new sample live
---------------------------


*todo*

Audio Regions
-------------

Overview
^^^^^^^^

An audio region is a continuous piece of audio which you can arrange on the timeline:

.. figure:: /images/three_audio_regions.png


From this view, you can drag the regions around and change their length. To
see a more detailed view of the audio, doube clikc a region to see the waveform.

.. figure:: /images/audio_regions_numbered.png

An audio region will only ever play back audio between **audio region start/end**.
The actual sample loaded is shown as the **waveform**, but what's played back
*of* the waveform is determined by the **loop region**. 

Whatever is marked by the loop region is played back as soon as the audio region starts,
and the content of the loop region is looped until the region ends.

You can change the location of the loop region by dragging the loop region handles back and forth.
To change the location of the loop region within the sample, drag on the bar between the handles.

Playback Speed Automation
^^^^^^^^^^^^^^^^^^^^^^^^^

Each looping sample has a **bpm** associated with it that is the "source bpm" of the sample.
By default, the sample plays with constant speed from front to back, with a speed that makes the source
bpm of the sample match the bpm of the project.

The speed of the sample is determined by the **playback automation handles**. By default, there is:

 - one at the very beginning of the sample at 0% 
 - one at the very end at 100%



From these two handles, audiotool calculates the playback as shown in the white line below.
Each position in the audio sample corresponds to the % the automation line points to.
For example:

 - at the beginning, the automation line is at 0%; thus, the sample is at the beginning
 - in the center (at half of the region), the automation is at 50%; thus, the sample has 
   has played 50% of its content at half the duration
 - at the end, the automation is at 100%, and the sample has finished

.. image:: /images/playback_speed_automation_0.png

If, for example, you create a new automation handle by double clicking anywhere in the sample,
and then drag the automation handle around, you can see the waveform changing as the speed of
the sample changes in various parts of the sample.

For example, let's consider the following change in playback speed. In this image, we created
a new automation handle by double clicking anywhere in the sample, then draging the handle to 
the location shown in the image:


.. image:: /images/playback_speed_automation_1.png

As you can see, the waveform was pushed together right until the first handle; after the first handle,
the waveform was pulled apart. This is because now, the sample is played back from 0% to about 80%
between the 1st and 2bd handle (making the playback way faster), and the remaining 20% are played
back between the 2nd and 3rd handle (making the playback wa slower). Here's the automation
line drawn over the audio sample:


.. image:: /images/playback_speed_automation_2.png


If you only drag the handle horizontally, you only change the playback speed of the sample before/after the handle;
you won't change where the handle points to in the original handle. This is how you can move e.g. the location
where a kick drum is played in time.

Playback mode
^^^^^^^^^^^^^

As you play back the sample like this, you will notice that the pitch of the sample changes with the speed of the playback.
This is because the sample is set to playback mode "pitch". To make the sample have constant pitch even as the speed of playback
changes, you can right click the region, then click "Change Playback Mode" -> "Timestretch":

.. image:: /images/set_playback_mode_to_timestretch.png
