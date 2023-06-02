Booster
=======

We were struggling with a proper audio playback in html5. Although it is
possible with a very high latency we are introducing a java based
utility that automatically connects to Next. The booster basically runs
the audio-code inside the java application and talks directly to the
sound-card. This reduces most playback glitches.

There is a better solution for this but it would take much more time to
implement and we did not want to move the launch of Next again. The new
solution would base on C++ scoring almost native speed on your computer.
So there is still something to be excited about :)

To install and run the booster please read:
https://next.audiotool.com/booster/

If you have any trouble please write a bug report.
