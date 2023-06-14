Booster
=======

Sometimes, the performance in the webbrowser is not enough: audio might be glitching, and
MIDI latency might be unusable.

For these cases, we provide the *Booster* application, allowing you to run the 
audio engine natively on your computer.

To use the booster, install it from one of the sources below, then launch it.
A small system tray icon should indicate that the booster is running.

After starting, go to `studio.audiotool.com <https://studio.audiotool.com>`_ as usual.
The text "Booster" (instead of "Worklet") at the bottom of the website should now indicate that Audiotool succesfully connected
to the booster and is now running with the booster as audio engine.

.. image:: /images/booster_connected.png


Installers
------------------

* `Windows (7+) <https://www.audiotool.com/app/booster/AudiotoolBooster-0.2.exe>`_ [#windows]_
* `Mac <https://www.audiotool.com/app/booster/AudiotoolBooster-0.2.dmg>`_ [#macos]_
* `Linux (Debian based) <https://www.audiotool.com/app/booster/audiotool-booster_1.0-1.deb>`_
* `Jar File <https://www.audiotool.com/app/booster/launcher.jar>`_ [#jar]_

If you're using Chromebooks, check the specific version of your laptop; it might be possible to install the Linux package.


.. [#windows] Since the application isn't signed, you might get a warning when installing.
.. [#macos] Since the application isn't signed you need to right click the booster app and choose open from the context menu. Also note that is an Intel only application.
.. [#jar] Experience users might run the jar file directly. For that, install Java 8+, then run with ``java -jar launcher.jar``.