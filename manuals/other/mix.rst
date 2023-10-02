.. _mix:

Mix
===

.. image:: /images/mix/mix.webp

Mix is an online DJ-tool with access to the audiotool music library. You can use it right now for free! `mix.audiotool.com <https://mix.audiotool.com/>`_.


Mixer
^^^^^

3 Band EQ
~~~~~~~~~~

.. image:: /images/mix/eq.webp

Used for isolating or removing frequencies playing through the channel to aid with mixing multiple tracks into each other

Trim and volume controls
~~~~~~~~~~~~~~~~~~~~~~~~

.. image:: /images/mix/trim_master.webp

* Trim is used for adjusting the overall loudness of a track playing through the channel
* Volume fader is used for fading the track in and out
Crossfader
~~~~~~~~~~

.. image:: /images/mix/crossfader.webp

Crossfader is for easily fading between different channels of the mixer with one control instead of using the volume faders, but can be used together with the volume faders for different techniques

Cue controls
~~~~~~~~~~~~

.. image:: /images/mix/cue_controls.webp

* Channel CUE button: when on, the channel audio will be routed to the phones output as well as master, this routing bypasses the volume fader
* Phones level: adjusts the level of the phones output
* Cue/Master blend: Allows the user to control how much of the master and how much of the CUE channel they hear through the headphones
* Split: toggles the mode of the cue output. Split 'on' puts the CUE output permanently on one stereo channel and CUE/Master mix on the other


Player Display
^^^^^^^^^^^^^^

.. image:: /images/mix/player_displays.webp

**Track info**
    * Displays authors, track name, genre, snapshot and cover if available
    * Allows liking the track from the app (if logged in)
    * This section is also a link to the track profile on the website
**Waveform**
    * Clickable waveform representing the loaded track
.. **Elapsed Time / Remaining Time**

.. **Position marker**

**Bpm** 
    * Displays the current bpm of the track (with speed adjustment applied)
    * Dot next to the bpm number shows whether the player is the master player
**Loop Info**
    * Displays whether loop mode is on and how many bars long the loop is


Player
^^^^^^

.. image:: /images/mix/loop_sync_nudge.webp

**Sync**
    * Syncs current track to the master player (if that player has a track)
    * When the player is paused, but the master player is playing, sync will also start the current player
**Loop**
    * Loop button toggles loop on/off
    * Loops are quantised
    * \*2, /2 buttons multiply or divide the loop by two while keeping it in time
**Nudge**
    * Nudge buttons let you slightly and temporarily speed up or slow down the player to aid with beat matching
**Skip beat**
    * Skip beat buttons allow you to skip back or forward by exactly a length of a beat
**Reverse Playback**
    * This allows playing the track in reverse
**Change pitch**
    * Changes the pitch of a track to allow for beat matching it with other tracks


Tracklist browser
^^^^^^^^^^^^^^^^^

.. image:: /images/mix/tracklist_open.webp

* A place to look at audiotool tracklists or for managing local tracklists
* Tracklists are displayed in lists on the left
* Tracks of a tracklist are displayed in the large area of the browser once a tracklist is selected
* Tracks can be dragged and dropped into local tracklists from audiotool tracklists or other local tracklists
* Tracks can be dragged and dropped into the players
* Tracks have a 'like' button
* Tracks can be sorted by different properties within the playlist by clicking on column headers


Audiotool Tracklists
~~~~~~~~~~~~~~~~~~~~

.. image:: /images/mix/tracklist_empty.webp

Search for tracklists on audiotool. A tracklist can be: user profile, album, latest in genre or collection of tracks that match the search result.

Local Tracklists
~~~~~~~~~~~~~~~~

.. image:: /images/mix/tracklist_local.webp

* Create or delete local tracklists (saved in site's local storage and not in the cloud)
* Track order can be changed
* Tracks can be added or deleted
* Tracklist name is editable
* Tracks can be reordered (when sorted by order)

Authentication
^^^^^^^^^^^^^^

* Authentication redirects to audiotool.com where an Audiotool account can be logged into or created

Broadcast
^^^^^^^^^

* Start or stop a broadcast
* Get a shareable link to a personal radio page when the broadcast is active

Settings
^^^^^^^^

Theme
~~~~~

.. image:: /images/mix/menu_themes.webp

Choose between 3 different themes

Layout
~~~~~

.. image:: /images/mix/menu_layout.webp

Select how many players are on the desktop


Render
~~~~~~

.. image:: /images/mix/menu_layout.webp

* Scrolling waveforms: shows zoomed-in waveforms with grid lines that scroll based on playback position. Turn off this setting to improve performance
* Shadows: toggle shadows
* Cover displays: toggle cover display in the center of the jogwheel


Outputs
~~~~~~~

.. image:: /images/mix/menu_output.webp

* Configure what device and channel phones and master output go to (Not supported by some browsers)
* Some latency might be experienced with non-default settings

Midi
~~~~
.. image:: /images/mix/menu_midi_mapping.webp

Mapping: A simple visual mapping interface. Click on a control to listen for MIDI signals. MIDI signal is then automatically saved.

.. image:: /images/mix/menu_midi_mapping_open.webp

Advanced: Manually tweak MIDI mappings
* Select MIDI device
* Add or remove MIDI message settings for each control
* Configure jog wheel center and degrees per tick
* Invert controls
* Clear all or reset to default