JamSync is a music application that maps four digital instruments to the keyboard to allow multiple people to improvise synchronously from the web browser.

[Live Demo] (https://eden12345.github.io/JamSync/)

I utilized the Tone.js library to create an oscillator through the Web Audio API that can be tuned to different pitches. It also has a streamlined envelope filter options hash, making it straightforward to change the attack and release. I then mapped samples of three other instruments to specific sections of the keyboard so that the synth could be played in conjunction with other players.

Using jQuery, I added a simple visual effect to indicate to the user whenever keypress are triggering an action on a specific instrument.

![screencap](https://github.com/Eden12345/JSequencer/blob/master/assets/JSequencer%20Wireframe.png)

I will be refactoring this shortly so that I instead use my own custom DOM manipulation library.
