Performance issues
------------------

If the app feels slow or the audio becomes glitchy, there are a 
couple things you can do. First of all, we recommend to install :ref:`Booster` application 
to offload the audio engine to your computer.

If that is not enough, here are a couple more things that could potentially improve your experience:


Update Chrome
    Install the latest stable versSion of **Chrome**. You can check your
    current version by typing ``chrome://settings/help`` into the address
    bar.

Free up system resources
    -  Close any browser **tabs** you don't need.
    -  Quit **background software** like Skype, WhatsApp, Dropbox, Slack,
       etc.
    -  Check for **CPU intensive**, unnecessary processes in your Task
       Manager (Windows) or Activity Monitor (Mac).
    -  Free up **space** on your hard disk if your machine runs out of it.

Remove unneded extensions
   Run the Studio in **incognito mode** to prevent extensions from interfering with the studio.

Reduce window size
   Reduce your **browser's window** if you have a very high screen
   resolution.

Optimize your arrangement
    Arrangements can often contain inefficient effect chains, where several
    devices could just be removed or merged without altering the final
    sound. Ideally, you don't need to bother, but every device on the
    desktop takes valuable CPU time. Here are some tips:

    -  You can often merge combinations of **Stereo-Detune** and
       **Stereo-Enhancer** into one.
    -  Compressors can make you believe that the sound is more powerful. Try
       bypassing them to see if they are really necessary. Sometimes just
       increasing the volume achieves the same effect.
    -  The **Heisenberg** can be very CPU intensive. Try to minimise their
       amount in your arrangement or, if you don't need any **Heisenberg**
       specific feature, use the less CPU intensive **Pulverisateur** to
       create your sound.
    -  **Quantum** as a multi-band compressor is mainly used for mastering
       and to alter the dynamic of specific frequency bands in complex
       sounds. If you do not need these features, replace it with
       **Gravity**, which uses way less CPU.
    -  When using **Curve**, switch off the filters you don't need.
    -  Switch the spectrum analyser in **Quantum** and **Curve** off once
       you've adjusted their settings.
    -  If several sounds use the same effect chain, connect it to a mixer as
       a send/return effects chain instead of duplicating and inserting it
       after each sound.
    -  Make your arrangement compact. Long cables take longer to draw.
    -  When working on parts of a big arrangement, deactivate any timeline
       tracks that you don't need to hear.


Activate Hardware Acceleration
   -  Please follow this
      `guide <https://www.lifewire.com/hardware-acceleration-in-chrome-4125122>`__
      to activate hardware acceleration in Chrome
   -  Update your graphics card drivers: `Google
      Search <https://www.google.com/search?q=update+graphic+card+driver>`__


On Windows: Set Browser graphics preference to 'High Performance'
   -  Search and select 'Graphics Settings' in Start or go to Settings >
      System > Display > Graphics
   -  Under 'Custom Options for Apps' find your web browser in the list (or
      add it to the list via 'Add an app')
   -  In the list, click on your web browser and click on 'Options'
   -  Select 'High performance' option if available