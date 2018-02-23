## Description

JamSync is a music application that maps four digital instruments to the keyboard to allow multiple people to improvise synchronously on the same keyboard from a web browser.

[Live Demo](http://ethangooding.com/JamSync/)

I utilized the Tone.js library to create an oscillator through the Web Audio API that can be tuned to different pitches. It also has a streamlined envelope filter options hash, making it straightforward to change the attack and release. I then mapped samples of three other instruments to specific sections of the keyboard so that the synth could be played in conjunction with other players.

Using jQuery, I added a simple visual effect to indicate to the user whenever keypress are triggering an action on a specific instrument.

![screencap](https://github.com/Eden12345/JamSync/blob/master/assets/screencap.png)

## Planned Features

I will be building off of the sound banks I used and the Tone.js Player classes to create a sequencer that will allow one player to create an a layered, looped sequence. I will also be refactoring the entire project so that I use my own custom DOM manipulation library rather than jQuery.
