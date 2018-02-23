# JamSync

JamSync is a music application that maps four digital instruments to the keyboard to allow multiple people to improvise synchronously on the same keyboard from a web browser.

[Live Demo](http://ethangooding.com/JamSync/)

## Description

I utilized the Tone.js library to create an oscillator through the Web Audio API that can be tuned to different pitches. It also has a streamlined envelope filter options hash, making it straightforward to change the attack and release. I then mapped samples of three other instruments to specific sections of the keyboard so that the synth could be played in conjunction with other players.

Using jQuery, I added a simple visual effect to indicate to the user whenever keypress are triggering an action on a specific instrument.


![screencap](https://github.com/Eden12345/JamSync/blob/master/assets/screencap.png)


## Upcoming Changes

  * Add sequencer -- using the soundbanks in the audio folder and the Tone.js Player classes, a sequencer page will be added to the project to allow one player to create an a layered, looped sequence
  * Refactor with DOMinateJS -- the entire project will be refactored to use my own custom DOM manipulation library rather than jQuery
